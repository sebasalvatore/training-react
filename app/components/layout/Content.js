import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import UserList from '../people/list';

const currentDate = new Date();
const Content = () => (
  <Card>
    <CardHeader
      title="Content section"
      subtitle="this is the subtitle."
    />
    <CardText>
      <div>
        Hello, I am your first static message showed inside a Card component.<br/>
        <b>{currentDate.toString()}</b>
        <UserList />
      </div>
    </CardText>
  </Card>
);

export default Content;