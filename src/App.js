import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CourseListPage from './pages/CourseListPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentDashboardPage from './pages/StudentDashboardPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={CourseListPage} />
        <Route path="/course-details/:courseId" component={CourseDetailsPage} />
        <Route path="/dashboard" component={StudentDashboardPage} />
      </Switch>
    </Router>
  );
};

export default App;
