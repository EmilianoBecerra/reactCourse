import "./Notice.css";

export function Notice(props) {
  const { title } = props;
  return (
    <div className="Notice">
      <div className="jumbotron">
        <h3>
          <u>{title}</u>
        </h3>
        <p>
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum
            autem officia incidunt reiciendis libero rem provident aliquam
            accusantium, aspernatur harum optio, minima quas obcaecati veniam
            quidem quam alias excepturi! Omnis odio nihil nemo, quae at fugiat
            explicabo earum harum maxime soluta repudiandae iste doloremque.
            Voluptate debitis, numquam placeat earum nesciunt eveniet quia quasi
            eaque culpa suscipit, quisquam distinctio. Ad! Consectetur numquam
            dicta sequi eveniet vitae iusto quaerat magni expedita odit deserunt
            voluptatum temporibus doloribus ducimus aliquam necessitatibus
            officia suscipit, facere quam inventore illum nobis unde corrupti
            architecto! Nostrum, modi.
          </i>
        </p>
      </div>
    </div>
  );
}

const HOCNotice =
  (time) =>
  (background, backgroundTime) =>
  (finalNotice) =>
  (UrlLogo) =>
  (OriginalNotice) =>
    function (props) {
      return (
        <div className={background}>
          {time && (
            <div className={backgroundTime}>
              Fecha y hora: {new Date().toLocaleString()};
            </div>
          )}
          <OriginalNotice {...props} />
          <img src={UrlLogo} alt="logo" width={25} className={"mr-5"} />
          <span>
            <b>
              {finalNotice.text} - {finalNotice.autor}
            </b>
          </span>
        </div>
      );
    };

export const NoticeWrapper1 = HOCNotice(true)(
  "btn btn-success p-4",
  "bg-danger",
)({ text: "Copyright 2023", autor: "Juan Perez" })(
  "https://cdn4.iconfinder.com/data/icons/social-media-2146/512/10_social-256.png",
)(Notice);

export const NoticeWrapper2 = HOCNotice(false)("btn btn-warning p-4")({
  text: "Copyright 2023",
  autor: "Ana Lopez",
})(
  "https://cdn4.iconfinder.com/data/icons/social-media-2146/512/11_social-256.png",
)(Notice);
