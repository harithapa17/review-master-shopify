
  import {
    IndexTable,
    LegacyCard,
    useIndexResourceState,
    Text,
    Badge,
    useBreakpoints,
  } from '@shopify/polaris';
  import React from 'react';
  
  export default function AdditionalPage() {
    const orders = [
      {
        id: '1',
        title: 'Title1',
        cName: 'Name1',
        status: 'Active',
        review: 'Review1',
        rating: 4,
      },
      {
        id: '2',
        title: 'Title2',
        cName: 'Name2',
        status: 'Pending',
        review: 'Review2',
        rating: 3,
      },
      {
        id: '3',
        title: 'Title3',
        cName: 'Name3',
        status: 'Active',
        review: 'Review3',
        rating: 5,
      },
    ];
    const resourceName = {
      singular: 'order',
      plural: 'orders',
    };
  
    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(orders);
  
    const rowMarkup = orders.map(
      (
        {id, title, cName, status, review, rating},
        index,
      ) => (
        <IndexTable.Row
          id={id}
          key={id}
          selected={selectedResources.includes(id)}
          position={index}
        >
          <IndexTable.Cell>{title}</IndexTable.Cell>
          <IndexTable.Cell>{cName}</IndexTable.Cell>
          <IndexTable.Cell>{status}</IndexTable.Cell>
          <IndexTable.Cell>{review}</IndexTable.Cell>
          <IndexTable.Cell>{rating}</IndexTable.Cell>
        </IndexTable.Row>
      ),
    );
  
    const promotedBulkActions = [
      {
        content: 'Create shipping labels',
        onAction: () => console.log('Todo: implement bulk edit'),
      },
    ];
    const bulkActions = [
      {
        content: 'Add tags',
        onAction: () => console.log('Todo: implement bulk add tags'),
      },
      {
        content: 'Remove tags',
        onAction: () => console.log('Todo: implement bulk remove tags'),
      },
      {
        content: 'Delete orders',
        onAction: () => console.log('Todo: implement bulk delete'),
      },
    ];
  
    return (
      <LegacyCard>
        <IndexTable
          condensed={useBreakpoints().smDown}
          resourceName={resourceName}
          itemCount={orders.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            {title: 'Review Title'},
            {title: 'Customer Name'},
            {title: 'Status'},
            {title: 'Review'},
            {title: 'Rating'},
          ]}
          bulkActions={bulkActions}
          promotedBulkActions={promotedBulkActions}
        >
          {rowMarkup}
        </IndexTable>
      </LegacyCard>
    );
  }