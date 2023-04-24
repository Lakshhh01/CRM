import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./LeadsList.css";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from './dummyData';
import { Link } from 'react-router-dom';



export default function Leads() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },

    {
      field: 'newsCategeory',
      headerName: 'News Categeory',
      width: 200
    },
    {
      field: 'city',
      headerName: 'City',
      width: 200
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 200
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='' className='userListImg' />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'type',
      headerName: 'Type',
      type: 'text',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          // <>
          // <Link to={"/dashboard/NewLeads"}>
          //   <button className="userListEdit">Edit</button>
          // </Link>
          <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
          // </>
        )
      }
    },
  ];
  return (
    <div className="userList">
      <div className='user'>
        <div className="userTitleContainer">
        <h1 className='userTitle'> Leads</h1>
        <Link to={"/dashboard/leadslist/addnewleads"} >
          <button className="userAddButton" >+Add New Lead</button>
        </Link>
        </div>
      </div>

      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  )
}

