import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import api from '../axios.js';

const DashboardService = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', description: '' });
  const [editingService, setEditingService] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch all services when the component mounts
    api.get('/services')
      .then(response => {
        setServices(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  // Handle Add Service
  const handleAddService = () => {
    api.post('/services', newService, {headers: { 
        Authorization: token ? `Bearer ${token}` : "", 
          },withCredentials: true})
      .then(response => {
        setServices([response.data,...services ]);
        setNewService({ title: '', description: '' }); 
      })
      .catch(error => {
        console.error('Error adding service:', error);
      });
  };

  // Handle Edit Service
  const handleEditService = (service) => {
    setEditingService(service);
    setNewService({ title: service.title, description: service.description });
  };

  const handleUpdateService = () => {
    api.put(`/services/${editingService._id}`, newService, {headers: { 
        Authorization: token ? `Bearer ${token}` : "",
          },withCredentials: true})
      .then(response => {
        setServices(services.map(service => service._id === editingService._id ? response.data : service));
        setEditingService(null); // Clear editing mode
        setNewService({ title: '', description: '' });
      })
      .catch(error => {
        console.error('Error updating service:', error);
      });
  };

  // Handle Delete Service
  const handleDeleteService = (id) => {
    api.delete(`/services/${id}`, {headers: { 
        Authorization: token ? `Bearer ${token}` : "", 
          },withCredentials: true})
      .then(() => {
        setServices(services.filter(service => service._id !== id));
      })
      .catch(error => {
        console.error('Error deleting service:', error);
      });
  };

  return (
    <div className="container">
      <h2>Manage Services</h2>
      <div className="mb-4">
        <h4>{editingService ? 'Edit Service' : 'Add New Service'}</h4>
        <div className="form-group">
          <label htmlFor="title">Service Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={newService.title}
            onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          />
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={editingService ? handleUpdateService : handleAddService}
        >
          {editingService ? 'Update Service' : 'Add Service'}
        </button>
      </div>

      {/* Service Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service) => (
              <tr key={service._id}>
                <td>{service.title}</td>
                <td>{service.description.slice(0, 120)}...</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEditService(service)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteService(service._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No services available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardService;
