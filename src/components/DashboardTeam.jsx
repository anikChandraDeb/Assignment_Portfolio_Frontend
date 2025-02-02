import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import api from '../axios.js';

const DashboardTeam = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: '', description: '' });
  const [editingTeam, setEditingTeam] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch all teams when the component mounts
    api.get('/team')
      .then(response => {
        setTeams(response.data); 
        console.log('Teams fetched:', response);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  // Handle Add Team
  const handleAddTeam = () => {
    api.post('/team', newTeam, {headers: { 
            Authorization: token ? `Bearer ${token}` : "",
              },withCredentials: true})
      .then(response => {
        setTeams([response.data,...teams ]);
        setNewTeam({ name: '', description: '' });
      })
      .catch(error => {
        console.error('Error adding team:', error);
      });
  };

  // Handle Edit Team
  const handleEditTeam = (team) => {
    setEditingTeam(team);
    setNewTeam({ name: team.name, description: team.description });
  };

  // Handle Update Team
  const handleUpdateTeam = () => {
    api.put(`/team/${editingTeam._id}`, newTeam,{headers: { 
        Authorization: token ? `Bearer ${token}` : "",
          },withCredentials: true})
      .then(response => {
        setTeams(teams.map(team => team._id === editingTeam._id ? response.data : team));
        setEditingTeam(null); 
        setNewTeam({ name: '', description: '' }); 
      })
      .catch(error => {
        console.error('Error updating team:', error);
      });
  };

  // Handle Delete Team
  const handleDeleteTeam = (id) => {
    api.delete(`/team/${id}`, {headers: { 
        Authorization: token ? `Bearer ${token}` : "", 
          },withCredentials: true})
      .then(() => {
        setTeams(teams.filter(team => team._id !== id));
      })
      .catch(error => {
        console.error('Error deleting team:', error);
      });
  };

  return (
    <div className="container">
      <h2>Manage Teams</h2>
      <div className="mb-4">
        <h4>{editingTeam ? 'Edit Team' : 'Add New Team'}</h4>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={newTeam.description}
            onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
          />
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={editingTeam ? handleUpdateTeam : handleAddTeam}
        >
          {editingTeam ? 'Update Team' : 'Add Team'}
        </button>
      </div>

      {/* Team Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.length > 0 ? (
            teams.map((team) => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.description}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEditTeam(team)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTeam(team._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No teams available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTeam;
