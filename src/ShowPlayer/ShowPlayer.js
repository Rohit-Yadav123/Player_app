import React from 'react'
import AppContext from '../AppContext'
export default function ShowPlayer() {
  const context = React.useContext(AppContext)[0];
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-12 offset-md-3'>
          <div className="data-table" style={{ width: "50%" }}>
            <h4 className='text-center'><u>Players List</u></h4>
            <table className="table table-info mt-3">
              <thead>
                <tr>
                  <th scope="col">Player Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Country</th>
                  <th scope="col">Total Match Played</th>
                </tr>
              </thead>
              <tbody>
                {context.map((player, key) => (
                  <tr key={key}>
                    <th scope="row">{player.id}</th>
                    <td>{player.playername}</td>
                    <td>{player.playercountry}</td>
                    <td>{player.totalmatches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}
