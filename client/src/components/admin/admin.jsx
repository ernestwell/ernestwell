// import { useEffect, useState } from "react";
// import { auth, checkAdmin, logout } from "../../Firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import "./admin.css";

// const AdminPanel = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let isMounted = true;

//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         try {
//           const isAdminUser = await checkAdmin(user.uid);
//           if (isMounted) {
//             setIsAdmin(isAdminUser);
//             if (!isAdminUser) navigate("/");
//           }
//         } catch (error) {
//           console.error("Error checking admin status:", error);
//         }
//       } else {
//         if (isMounted) navigate("/login");
//       }
//       if (isMounted) setLoading(false);
//     });

//     return () => {
//       isMounted = false;
//       unsubscribe();
//     };
//   }, [navigate]);

//   if (loading) return <p className="loading-text">Loading...</p>;

//   if (!isAdmin)
//     return (
//       <div className="access-denied">
//         <h2>Access Denied</h2>
//         <p>You do not have the necessary permissions to access this page.</p>
//       </div>
//     );

//   return (
//     <div className="admin-container">
//       <h1>Admin Dashboard</h1>
//       <button className="logout-btn" onClick={logout}>Logout</button>
//       {/* Add admin features here */}
//     </div>
//   );
// };

// export default AdminPanel;
import { useEffect, useState } from "react";
import { auth, checkAdmin, logout, db } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [footerContent, setFooterContent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isAdminUser = await checkAdmin(user.uid);
        setIsAdmin(isAdminUser);
        if (!isAdminUser) navigate("/");
      } else {
        navigate("/login");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  // Fetch footer content
  useEffect(() => {
    const fetchFooterContent = async () => {
      const footerRef = doc(db, "websiteContent", "footer");
      const footerDoc = await getDoc(footerRef);
      if (footerDoc.exists()) {
        setFooterContent(footerDoc.data());
      }
    };
    fetchFooterContent();
  }, []);

  // Update footer content
  const handleUpdateFooter = async () => {
    const footerRef = doc(db, "websiteContent", "footer");
    await updateDoc(footerRef, footerContent);
    alert("Footer content updated!");
  };

  if (loading) return <p>Loading...</p>;
  if (!isAdmin) return <p>Access Denied</p>;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <button className="logout-btn" onClick={logout}>Logout</button>

      <div className="footer-editor">
        <h2>Edit Footer Content</h2>
        <label>About Text:</label>
        <textarea 
          value={footerContent.aboutText || ""} 
          onChange={(e) => setFooterContent({ ...footerContent, aboutText: e.target.value })}
        />

        <label>Contact Email:</label>
        <input 
          type="email" 
          value={footerContent.contactEmail || ""} 
          onChange={(e) => setFooterContent({ ...footerContent, contactEmail: e.target.value })}
        />

        <label>Facebook Link:</label>
        <input 
          type="text" 
          value={footerContent.socialLinks?.facebook || ""} 
          onChange={(e) => setFooterContent({ 
            ...footerContent, 
            socialLinks: { ...footerContent.socialLinks, facebook: e.target.value }
          })}
        />

        <label>Twitter Link:</label>
        <input 
          type="text" 
          value={footerContent.socialLinks?.twitter || ""} 
          onChange={(e) => setFooterContent({ 
            ...footerContent, 
            socialLinks: { ...footerContent.socialLinks, twitter: e.target.value }
          })}
        />

        <button onClick={handleUpdateFooter}>Save Footer Changes</button>
      </div>
    </div>
  );
};

export default AdminPanel;

