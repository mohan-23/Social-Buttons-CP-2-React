const Button = (props) => {
  const { name, className } = props;
  return <button className={`${className}`}>{name}</button>;
};

const element = (
  <div className="bg">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-card">
      <Button name="Like" className="btn1" />
      <Button name="Comment" className="btn2" />
      <Button name="Share" className="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
