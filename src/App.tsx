import "./App.css"
import {HomePage} from './HomePage'
import {PrivacyPolicyPage} from './PrivacyPolicyPage'
import {Route, Switch, Redirect} from "react-router-dom"

export const App = () => {
  return (
    <div>
      <Switch>
          <Route exact path={'/portfolio2.0'} render={() => <HomePage />} />
          <Route exact path={'/privacy'} render={() => <PrivacyPolicyPage />} />
          <Route exact path="/portfolio2.0" render={() => <Redirect to={"/portfolio2.0"} />} />
      </Switch>
    </div>
  )
}



