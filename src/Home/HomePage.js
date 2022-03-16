import classes from "./HomePage.module.css";
import photo from "./myPhoto.jpg";

export default function HomePage() {
  return (
    <div className={classes.aboutMeSection}>
      <div className={classes.container}>
        <section className={classes.aboutMe}>
          <h1>Mohan Raj L</h1>
          <p className={classes.myDesc}>
            A <span className={classes.role}>Web Developer </span>
            and a <span className={classes.role}>Sports Enthusiast</span>
            <br /> based in Karur, Tamil Nadu
          </p>
          <div className={classes.socialLinks}>
            <a
              href="https://www.linkedin.com/in/mohan-raj-l-6a29081ba/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={classes.icons}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADz8/N4eHhLS0vIyMj39/f8/Pzu7u74+Pjq6urg4ODk5OReXl7w8PB1dXVmZmZra2s3NzesrKyDg4NRUVGQkJCioqLb29sPDw+Hh4ccHBxERESvr689PT2lpaXKysodHR0yMjIoKChYWFiamprJyckTExO7u7vcshGSAAADbUlEQVR4nO2c2XbaMBBAowCFmIAhIWwhgWwt//+F5dDTJCyasWsJLb33WTqai7EtjUa+ugIAAAAAAAAAAAAAAAAAAAAAAACA6Ok/TcvRaDyZbbqhQ/HBvGW+0X4KHY9r+m1zzH3omJyyPPHbcXcdOix3rM4J7uiHDswVdxZBY25Dh+aGgVXQmCweqltB0IxDR+cCSdCYeejwmjOTDQeh42vOL9nQDEMH2JS+Ipj+i/9eM0z+WdPSDF9CR9iUd83QhI6wKacz7mNuQofYEN3wR+gQGyJN2fL4l040wUXoCJvypBmOQkfYlEIzTP6Nf/WqGCY/a9P+phnMvJXVUw6JjI4kOAkdnROEqelb6Ngc8WA1TH0+84llYvOSUcL0bCqjDB2VU4qTy7jKIAd1SDF9/NJbTLLz2zPsrKfL5XTd6YWOBAAAACBKute93jD17LmFYrt8/5rxrsrMCq42ZxPOzx+XrfGwLvD3HC+ClR3Vg7azhbXd6yWryuoZKhnk735yS/MRqWGvouHGfv0+2UZpOKxmqG747GlfJhFUz/C6imH3uZLgjp/xGf6oYKhc5wNmKRoqt+oRF8iq1zO8UQ2V3yCAomvDt5qG/l8b9Qy7muGorqAxnaQM1RqrKoPEbFj3JvzDKiZDufmbfRtLxG+xgEtDrZTTitcVlUvDf8brKyMKQ68PmzgMl9kb+iyfi8TQ46I/EsPn7A1NkaDhy6DVKgePesM969QMR52/CeCbrV6mu+MhLcPysKSxqDKbS8rwtJJjrXfapGN4d26WKR6R2+NtJezc0PLcV6+it3pr14YL2zpBuxe91cy7NrTW3Ko5OF9LKMeGU/tI2hkrX/XIjg2FkW6Vrr4yUm4NxXyE/dC43jcaQ3GoD7mvr9eFU8OWONRc7uwrleHUUNkSlDv7Oq7q1FB5HMo3oq/TK04NlYKSUuzsa3Xh1FAZayp2bmdgKO9q5GAoLzByMBTPWGGIIYYYYoghhtEYqvU0GGKIIYaNDfXaRAxjN8z/X5q/YZVKdgwxxBBDDP93w0onuzDEEEOvhhXPkGKIYUDDqme5McQQQwwxtBtW//IHhhhiiCGGNkOl3h5DDDHE0IFhnS/S1TX09YmTcUtgfPxl/UJsrn3GfS71LoVDYQAAAAAAAAAAAAAAAAAAAAAAAAAQkt8Uhjn7mAsanQAAAABJRU5ErkJggg=="
                alt="LinkedIn Profile"
              />
            </a>
            {/* <a href="https://twitter.com/MohanRa72219987" target="_blank" rel="noreferrer noopener">
              <img className={classes.icons} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwiQrpHhPPDKsnckXctaeDbzmSpfkvpDtQA&usqp=CAU" alt="twitter-profile" />
            </a> */}
            <a
              href="https://github.com/lmohanraj"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={classes.icons}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3p9u1IuwTXatDz-2rmmMnCQbCFBZ1hTmNA&usqp=CAU"
                alt="twitter-profile"
              />
            </a>
          </div>
        </section>
        <img
          className={classes.myPhoto}
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU"
          src={photo}
          alt="profilePicture"
        />
      </div>
    </div>
  );
}
