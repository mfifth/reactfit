import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { LifetimeStats } from "./LifetimeStats";
import { Badges } from "./Badges";
import { Charts } from "./Charts";
import { Friends } from "./Friends";
import dummyData from "./DummyData";
import "bootstrap/dist/css/bootstrap.css";

const CLIENT_ID = "22D72X";
class Dashboard extends React.Component {
  state = dummyData;

  getFitbitData(url, fitbitToken, stateKey) {
    Axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${fitbitToken}` },
      mode: "cors"
    })
      .then(response => {
        this.setState({
          [stateKey]: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    console.log(this);
  }

  componentDidMount() {
    if (window.location.hash) {
      let fitbitToken = window.location.hash
        .slice(1)
        .split("&")[0]
        .replace("access_token=", "");

      this.setState({ loggedIn: true });

      this.getFitbitData(
        "https://api.fitbit.com/1/user/-/profile.json",
        fitbitToken,
        "currentUser"
      );

      this.getFitbitData(
        "https://api.fitbit.com/1/user/-/activities.json",
        fitbitToken,
        "lifetimeStats"
      );

      this.getFitbitData(
        "https://api.fitbit.com/1/user/-/activities/date/today.json",
        fitbitToken,
        "today"
      );

      this.getFitbitData(
        "https://api.fitbit.com/1/user/-/badges.json",
        fitbitToken,
        "badges"
      );

      this.getFitbitData(
        "https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json",
        fitbitToken,
        "charts"
      );

      this.getFitbitData(
        "https://api.fitbit.com/1/user/-/friends.json",
        fitbitToken,
        "friends"
      );
    }
  }

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <span className="pull-right">
            Welcome {this.state.currentUser.user.displayName}
          </span>
          <h1 className="page-header">ReactFit</h1>
          <p className="lead">Your personal fitness dashboard</p>
        </header>

        {!this.state.loggedIn && (
          <div style={{ "text-align": "center" }}>
            <a
              className="fitbit-btn"
              href={`https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`}
            >
              Fitbit Login
            </a>
          </div>
        )}

        <div className="row">
          <div className="col-lg-3">
            <LifetimeStats
              myStats={this.state.lifetimeStats.lifetime.total}
              todaysStats={this.state.today.summary}
            />
            <Badges myBadges={this.state.badges.badges} />
          </div>

          <div className="col-lg-6">
            <div className="panel-default">
              <div className="panel-heading">Steps</div>
              <div className="panel-body">
                <Charts stepData={this.state.charts} />
              </div>
            </div>
            <div className="panel-default">
              <div className="panel-heading">Distance (miles)</div>
            </div>
          </div>

          <div className="col-lg-2 col-lg-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Friends</h4>
              </div>
              <div className="panel-body">
                <Friends friendList={this.state.friends.friends} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement("div"))
  );
});
