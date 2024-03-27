// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const ImageUpload = () => {
// //   const [file, setFile] = useState(null);
// //   const [version, setVersion] = useState('');
// //   const [description, setDescription] = useState('');

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('version', version);
// //     formData.append('description', description);

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/admin/upload', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Failed to upload image:', error);
// //     }
// //   };

// //   return (
// //     <div style={{marginTop:"150px"}}>
// //       <h2>Upload Image</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="file">Choose Image:</label>
// //           <input type="file" id="file" onChange={handleFileChange} />
// //         </div>
// //         <div>
// //           <label htmlFor="version">Version:</label>
// //           <input type="text" id="version" value={version} onChange={(e) => setVersion(e.target.value)} />
// //         </div>
// //         <div>
// //           <label htmlFor="description">Description:</label>
// //           <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
// //         </div>
// //         <button type="submit">Upload</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ImageUpload;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState(null);
//   const [version, setVersion] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/getimages');
//         setImages(response.data.images);
//       } catch (error) {
//         console.error('Failed to fetch images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('version', version);
//     formData.append('description', description);

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setImages([...images, response.data.image]);
//       setFile(null);
//       setVersion('');
//       setDescription('');
//     } catch (error) {
//       console.error('Failed to upload image:', error);
//     }
//   };

//     const handleDelete = async (image) => {
//     try {
//       await axios.delete('http://localhost:5000/api/admin/deleteimage', {
//         data: { url: image.url }
//       });
//       setImages(images.filter(img => img.public_id !== image.public_id));
//     } catch (error) {
//       console.error('Failed to delete image:', error);
//     }
//   };

//   return (
//     <div>
//       <div style={{ marginTop: "150px" }}>
//         <h2>Upload Image</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="file">Choose Image:</label>
//             <input type="file" id="file" onChange={handleFileChange} />
//           </div>
//           <div>
//             <label htmlFor="version">Version:</label>
//             <input type="text" id="version" value={version} onChange={(e) => setVersion(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//           </div>
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//       <div >
//         <h2>Images</h2>
//         {images.map(image => (
//           <div key={image.public_id}>
//             <img src={image.url} alt={image.description} style={{height:"100px",width:"100px"}}/>
//             <p>{image.description}</p>
//             <button onClick={() => handleDelete(image)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageUpload;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getimages');
        setImages(response.data.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('version', version);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:5000/api/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImages([...images, response.data.image]);
      setFile(null);
      setVersion('');
      setDescription('');
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  const handleDelete = async (image) => {
    try {
      await axios.delete('http://localhost:5000/api/admin/deleteimage', {
        data: { url: image.url }
      });
      setImages(images.filter(img => img.public_id !== image.public_id));
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  return (
    <div className='release'>
    <div className="image-upload-container">
      <div className="uploader">
        <h2>Upload Image</h2>
        {/* <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="file">Choose Image:</label>
            <input type="file" id="file" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="version">Version:</label>
            <input type="text" id="version" value={version} onChange={(e) => setVersion(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit" className="btn">Upload</button>
        </form> */}
        <form onSubmit={handleSubmit} className="image-upload-form">
  <div className="form-group">
    <label htmlFor="file" className="form-label">Choose Image:</label>
    <input type="file" id="file" onChange={handleFileChange} className="form-control-file" />
  </div>
  <div className="form-group">
    <label htmlFor="version" className="form-label">Version:</label>
    <input type="text" id="version" value={version} onChange={(e) => setVersion(e.target.value)} className="form-control" />
  </div>
  <div className="form-group">
    <label htmlFor="description" className="form-label">Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Upload</button>
</form>

      </div>
      <div className="gallery">
        <h2>Images</h2>
        <div className="image-grid">
          {images.map(image => (
            <div key={image.public_id} className="image-item">
              <img src={image.url} alt={image.description} style={{height:"600px"}}/>
              <p>{image.description}</p>
              <button onClick={() => handleDelete(image)} className="btn btn-danger">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageUpload;
