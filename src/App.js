import React from "react";
import Lesson from "./components/Lesson.js";
import SideNav from "./components/SideNav.js";
import Exercise from "./components/Exercise.js";
import Hints from "./components/Hints.js";
import Settings from "./components/Settings.js";
import data from "./tempData.js";
import { Layout } from "antd";
import "./App.less";
const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      langData: data,
      lessonIndex: 0,
      exerciseMode: "target2base",
      showLesson: true,
      showExercise: true,
    };
    this.switchLesson = this.switchLesson.bind(this);
    this.updateMode = this.updateMode.bind(this);
  }

  switchLesson(event) {
    this.setState({
      lessonIndex: event.key,
    });
  }

  getLessonNames() {
    let lessonDescriptions = [];
    data.forEach((lessonData) => {
      lessonDescriptions.push({
        number: lessonData.Lesson,
        description: lessonData.Description,
      });
    });
    return lessonDescriptions;
  }

  updateMode(event) {
    this.setState({
      exerciseMode: event.target.value,
    });
  }

  render() {
    return (
      <div className="pageContainer">
        <div className="App">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider className="site-layout-background" width={200}>
                <SideNav
                  lessons={this.getLessonNames()}
                  onUpdate={this.switchLesson}
                />
              </Sider>
              <Content>
                <div style={{ width: "800px" }}>
                  {this.state.showLesson && (
                    <Lesson
                      pairs={this.state.langData[this.state.lessonIndex].Pairs}
                    />
                  )}
                  <br />
                  {this.state.showExercise && (
                    <Exercise
                      exercises={
                        this.state.langData[this.state.lessonIndex].Exercises
                      }
                      mode={this.state.exerciseMode}
                    />
                  )}
                </div>
                <br />
              </Content>
              <Sider>
                <div>
                  <Settings updateMode={this.updateMode} />
                  <hr class="divider" />
                  <Hints
                    hints={this.state.langData[this.state.lessonIndex].Hints}
                  />
                </div>
              </Sider>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
