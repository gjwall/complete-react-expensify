import React from 'react';

const EditExpensePage = (props) => (
    <div>
        This is from my edit expense component with id of {props.match.params.id}
    </div>
);

export default EditExpensePage;