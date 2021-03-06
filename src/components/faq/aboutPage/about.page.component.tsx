import * as React from "react";
import { Component, Fragment } from "react";
import {
  QuestionAnswer,
  QuestionList,
  QuestionTitle,
} from "./about.page.style";

type Props = {
  renderRightComponent: (component: JSX.Element) => void;
  highlightColor: string;
};
export default class AboutPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.onQuestionClick(0); //render first page
  }
  onQuestionClick(questionIndex: number) {
    let question = questions[questionIndex];
    this.props.renderRightComponent(
      <QuestionAnswer>
        <h3 style={{ color: this.props.highlightColor }}>{question.title}</h3>
        {question.content}
      </QuestionAnswer>
    );
  }
  render() {
    return (
      <Fragment>
        <QuestionList>
          {questions.map((question, index) => (
            <QuestionTitle
              key={index}
              onClick={() => this.onQuestionClick(index)}
            >
              {question.title}
            </QuestionTitle>
          ))}
        </QuestionList>
      </Fragment>
    );
  }
}

const questions = [
  {
    title: "Who is developping this project?",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <b>Eveniet dolorum veniam ut illo voluptatem consequatur deleniti.</b>
        <br />
        <br />
        Laborum, dignissimos ab repudiandae veniam earum necessitatibus tempore
        tempora atque eius consequuntur ullam fuga obcaecati numquam nesciunt
        nulla rerum error, harum ut incidunt temporibus, cupiditate qui? Rerum
        illo tenetur quam nemo suscipit explicabo ut rem consequatur nihil at
        deserunt omnis maxime quaerat amet, nesciunt, ullam unde veniam fuga
        officia odio corrupti debitis quas voluptates laudantium. <br />
        <br />
        Sed ducimus ad laboriosam fugiat error eveniet culpa! Mollitia
        accusantium magni, illo adipisci qui quae pariatur vero quos ut
        blanditiis dolores in modi fugiat velit ducimus, iure perferendis
        quidem.
      </p>
    ),
  },
  {
    title: "What is Solid?",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <b>Eveniet dolorum veniam ut illo voluptatem consequatur deleniti.</b>
        Laborum, dignissimos ab repudiandae veniam earum necessitatibus tempore
        tempora atque eius consequuntur ullam fuga obcaecati numquam nesciunt
        nulla rerum error, harum ut incidunt temporibus, cupiditate qui? Rerum
        illo tenetur quam nemo suscipit explicabo ut rem consequatur nihil at
        deserunt omnis maxime quaerat amet
      </p>
    ),
  },
];
