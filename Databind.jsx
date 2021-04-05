import React from 'react';
import DataGrid, { Pager, Paging } from 'devextreme-react/data-grid';
import { customers } from '../Databinding/Data';
//import Button from 'devextreme-react/button';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-size:20px;
  color:green;
`;
const StyledDatagrid=styled(DataGrid)`
.dx-datagrid {
  color:red;
}
`;




const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class Databind extends React.Component {
  render() {
    return (
      <>
        <Title>Data binding using simple array with pagination</Title>

        <StyledDatagrid
          dataSource={customers}
          defaultColumns={columns}
          showBorders={true}
        >
          <Paging defaultPageSize={10} />
          <Pager
            showPageSizeSelector={true}
            allowedPageSizes={[5, 10, 20]}
            showInfo={true} />
        </StyledDatagrid>
      </>
    );
  }
}

export default Databind;