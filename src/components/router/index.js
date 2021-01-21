import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';

import Home from '../views/public/home';
import About from '../views/public/about';

export default () => (
    <Router>
        <Switch>
            <Route>
                <PublicLayout>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>
                </PublicLayout>
            </Route>
        </Switch>
    </Router>
);