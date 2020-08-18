import React from 'react'

class TableItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          {this.props.data.name}
        </td>
        <td>
          {this.props.data.email}  
        </td>
        <td>
          {this.props.data.body}
        </td>
      </tr>
    )
  }
}
export default TableItem;