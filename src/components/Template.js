import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">오늘의 할 일 ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;

// Children API 알아보기 (정리)
// state, prop 개념 다시 이해하기
// 함수형 컴포넌트, 클래스형 컴포넌트 차이 이해하기
// 리액트 import from 알아보기
