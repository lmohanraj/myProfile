import "./App.css";
import About from "./About/About";
import HomePage from "./Home/HomePage";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState(0);
  const navItems = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "Resume",
      path: "/resume",
    },
    {
      id: 3,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    let current = navItems.filter(
      (itm) => window.location.pathname === itm.path
    );
    setCurrentItem(current[0].id);
  });

  return (
    <div>
      <div className="navBarContainer">
        <div>
          <Link to="/" className="logoName">
            <img
              className="logo"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////FxcXe3t709PTX19f8/PzLy8t+fn5ubm729vbs7OzPz89mZmbHx8ddXV2NjY29vb2goKAXFxeFhYVXV1dQUFCXl5clJSWoqKi2trY+Pj4RERFfX18xMTHl5eUpKSl1dXUeHh5JSUmvr686OjqBgYFDQ0M7OzuSh7cMAAAO0ElEQVR4nNVd2WLaOhANi4GyG0JIyAKkvU3//wsvhBCsM4tGi+32PGJs6djSbBqN7u5qx9titH0qp8V+0h93zhj3J/tiWj5tR4u3+puvFZvlruh3dPSL3XLTdkdj8LDtTjzcqph0tw9tdzkAm1URQO6GYvVPfMz7YRS7K4b3bRNQ8b7tJdG7oLd9b5uIgGUOel8kl22ToZilDU6K4axtSg5W48z8zhiv2qZ1xXNZA70Lyue2yZ2wiNMMVhSLlvnN9rXyO2Pf5oRc1M/vk2Nb3/Gj3vFZRfHRAr+XbmAv+/vedN49Yz7t7X0GOaL70jTBlblvvXI12nBe0ttmtCrtVkKzuuPV9AnGw9Vs7X3WerYamtRp/7UBZl+YG7pTjh4Dnvg4Kg0vbV4bIxdHb0+my0PEcw/LqffJx9xkOPi6MU/pxdE3PKbZeEiY6R0oRsktjDxKqGYDYKe1PV755YoFa92Q32VphMejFnopfmRs6Yf2ISchMiysWaXVbm4v4I9mUeR8mRU8KQOnjrjDuzIlnmpo704eN2We6Uexlj3PIntj76JCHh6yN3bDQQyO9DMPm59SQ/u6A7kPoof2M2czooxpIrp5LzWeUd5IbZT5mlAhTcds73fLP3/cXAx+I5gA2zyPF7REnaYFhaA5smiNX+yjBw06a594HbD9+JX+ZJ5gfnXkB6+QkynyQzTT+A8ELw8SByr/0LaW+R7yv25WTewbD3vdwKr/BKXBKvphvv5GgLXiolU/a6rVYtUHgBUMkQbce+YRkQnszIkzwzlv4m9YtuRCRf2YB3Hq5+/IldgwPYtQ0Mx4H2T1VxLACYhg+cCJ0aihUMUL81Aeg35v+Ote9D05ioEC9ZFtN9VCCs9m6D3xE4OjGBaBE8KG/yURfA0meMZgx31KZi5OQvoiRbl6SQyjEzYmTHoNI1ED/Dk5dP87gaB9yZEBXT1k9KJdlyktxRM8pBA8gXxHRtpb+6KtLsWHZpJX/SeorKjgMq5MHdV2YnWi/lQbUJZTT8O2sqe3EiSxKuCDEIGYQD4A/YelK741yri0QT4YEg73I1GX2LAQ7ldaMQT/y0QQrTMag/BHyPwJAzH5AhmTp7rOg4n88pqWRGkxjMOTsMTAfAxcgUnmtyfvhtrGjAUYboHnJAgU6azSw0hk4XXH9S40PYlZdxiUXQXzQh3WzkAlFmZX6sYZH/jvMf/+w4IGnCPgHwePx50oE5xXTMxdLc2PzNsFzzDMo+YcFdtIf5aUTNUZJG6G0rsF/vdso3lb8IGNKpvn8j3vkVRVP5kEsigkg/9OYjiwE+Qd+wBpxb4hx7TCi3vpUcRpuhcZBrj7vGMfIo9fOKO92gGijCQ3Cj/h5VXwDDvWfXVk5IczvLtbMk+ougB8z/19edAYWt19QR4G6lRmTWaiXeZnIo6FrwUKgWHHlqMnOfahVsOB+iZVFwCnAitOn/EJB52hyQLnY3YRDO/eKcXqC8BrXBIaytyrNy8ytAR+RMc+3PKjUZCq3pd6XwXevxZ+v8G/RUDO9YuILtO5WLm4Vq59ASfM9xeSGYpq5xuyYx8TPycStbr6i+YptZ3RdPg2PWWGXndfceyzLBZVH4JrgWO8GbX9zUBXGHqEjebYRzEk5lFVs6NbhFofxe1NFmkMVUflTtstErfKgwZcNdzwB67hajxcLsQrLrQFxZF2Y+Q6Fs6l6jUcw+6dOIkrvoPKUOto9I0KfsNjqqE3FNyulIABVZ2makeVZBZ9Z2nsWiRIZ2eawAd27EoURFVRqzMU3X0x5zaNISi1gXLN6RrO4GriNjwSuyotFRDH3r0zliFq9j/Kter4gkHq2K3upR3xknlfjGjnqbveE71iDl11sl9A1lSHKfTGcRvcS10uWMUA/9WBrkUzhOHmGMcovW9X0EdW+tqlAUcuC4IsfjzlYggukOumQqO3Dwzqfq7c1WU+D3X3SfhrjMMrPq8Dnuxcgxc7lG46Kk/sMlOMuvvEsZ/lYwiTzbl2FOjjG9fe2VkBEWGD7j5x7M8CNxdDcCLcFVto92pyQYdA/lOGRNhAbJGm/K0zMoQh5IpyWKC/6nX47uATUYZ0qcB194lj/6mYcjE8us92xw/Qv6o96M/By5AKm6q7Txz7S1QsF0NYbHK/B4Y6Lr9CdADb5hgSt6Hq7pMw/ENWhtBdGHEg4y5Ngw7FGA7HkLp+t4ZImgt7SzxDMHiBIdj7F8MNVDgKRra7b0jjWwCLV3IxBMkPDGF0XboLNjKm+LEMxS8lf91cDCHeAmnZEKCdMBSImckTkWabPENzMYQWMEcI+nX+Cb462WwgMBQkJv56C/jkYghiA7NLwAI963xQISTOKDCk2W/nWa1oylwMQZZgyiuYL0vaKeLuSQw5y0WzdnIxBJsRL8M0Pb9hsEDIvmyJIWd9Eou1Mkvq8S2I2ABH/2zVgI70PLEa+iEeBAk+Vb2OTAzBpKHLaB3SjtwnH0Nu34OLqueYiSGoKbraDuqKaGi6KiUz9KYxOt5/JoYwcGhCKQykN1zbpks2CkNPpNGdI3kYYpCSpniBeFigAqVr1xpDLoPgBlcs52EIX4jJ5yWEQIHShQiNobQv4xPgSedhCG0wSS8gHbY4c2lUSWWoRbZB72RhiOYwszIEguUJPzu9Q2WorE7gikYWhtAGm5rl/qVE4yuUoShsCIUcDPF9splZ7l+mYNIwDXsYSquEZPxkYEgUMLsPy9UnBRhaTPKBh6Gw0uv7XxRD9Nj4vCxkNPHd4+s5derPoM9JZ0hyAPkcULehCXxTZq3Mx5DNuGCyNJIZkixMYXMLLnK5X57ZaeBlyGTNcJk2qQyPpBVhC5BrS479BPwMaeYTly2VyJA2IiUsQWQtB0MS5GYz3tIYMiJbygOpgyFmILINJzFkkjjFrTt1MIQO8JmnKQy5FEfxz7UwdCSykD0cz/DI8FN2GiLDDLL0zs2gFjLAYxl+sCaFkm+GsjRdH37ipo2l4gZxDDf8ll3tdtSHyTYN/E3ciRHB8G0r+Z8H5S60aZLt0i9c3X1xN00Yw8fFUqmdrFYgQUapvsU3Lq9b3nME02mgQaR2gb6fGX2LVP/wGxd3X97Vlu8EE08VIPfP01Qfv4Lzk5SdidkY+socuf8uE+M08E9tduVi6NtyT+I0abE2B7/VHcKZGHrrpZJYW1K8FKDuns3CcO8v6EsIJcW8Q5CDoWVPIIl5p6xbNMzQVjCVrFskrD01zNBY64qsPSWsHzbKcGgtA+Xedpbu0WvATTKcmytUMWvAsev4zTEcPAXs/2fW8WNzMRpiOCjDKhkyuRiR+TRNMQwsw8bl00TmRCUyHMyHPEhIJrCCGpMTFZfXlspQtmBJxkpQBTU2rw3yDUy5iRGwMqS7FkNaYXMTY/JLI2D28ck6SEgFNTa/NCJHOAb2KAZx8QMqqLE5whF53jGwMzwiQ3sFNT7POzxXPwoBkSgiT80V1IRc/dD9FnEIYEgrMVgbEfZbhO6ZiUNINJEsxFiLiMNtG+F3z76nSATFS0mOta2C2lH6VmF71yIRxJDUKLOtAoh714L2H8YiLOZNshJMFdTgnnvxiraHNJjZFWEMaXUpgwUu7yEN2AfcFEOaeWGooKbsA7bv5W6MIU179FZQ0/Zy2/fjN8eQlKPxVlDT9uPbayo0x5CmPfqipVpNBXtdjAYZWrZUV6HXxTDXNmmSISk0p7v7em0Tc32aJhn6t1RXgbXK0NCz1hhqlCEpsKZZ4L4aQ9Y6UY0ypBvFZHffWyfKWuurWYYB7r6/1heRXHy9toYZHrFXkrtvqNdmrLnXMEOzu2+puWerm9g0Qwy8CMKGpGKzh/eaal82zZBuqWazLk21L231SxtnSN19ZiXYWL/UVIO2eYak9i9zq7EGramOcPMM6ZZqogjMdYQttaBbYEgUAUktw+tyUU5DPe8WGFJ3HyK6pHKVEpjz12Rvg6HH3SffRYt3+Ovqt8KQiErH6Ayqq+8/G6EVhmoFtbCzEfznW7TDUHH3Q8+38J5R0hJDuYIaIegNHXvOmWmJoejuh58z4zsrqC2GRAZeLPCYs4I8hRLaYsjXhaF1K0wHGf2dDKm7/8EdnWF61PHvZMjUZ6L7TWznrqln57XHkKaNUYLGs/PUcdoiQ35LtQPzs+QzLNtkKJxkX0FAFqN0Dmm7DH0HmQacQ6rULGmVoTK2OqEnM4pni7TKUJWBoYmo0tkb7TJkj3v/QuCZzuK0bpchf7rVJ4LP5ZaOiGmZoegYRJytLjysbYZCBbWMg96aYEbh+j8BB7e54IsaBWxXqIItAhUx3i94/eEg9jGsfIg9pJgXqPFfMQfYc+qiX5dwQurEEwipES/s4Z2+bbMqeOls2iVXA5jz5TraMSkm8Gox8aGR4F93tGC4gj+VKkr9JIJX0JZtpR4IB28ZIj5Z8cqXIchAULTfgnyVZAj+XPIQvUAwBsfhp1fHYiN4htnkgXSsdrwJFwapOGOSmnAhnmOYsQ0R4rHlCYqeQqziuffWOEjEg3hCd7SpxuNdXM8YWs/NjcGBP034hH6ksa1APFK0U/pLOcRhLVdHrUUhK8G8Xf4Xeho2csQvl5ZAyOemnsQqm2aVgGey7ltBVhlTxaNWGLnI2ewPeU6cnJvAqFoQlIFzMgFWeSbkeqWGfms2pvSgbKewnWWtYaR9vk5Q6D4SalT2hLlxhYvF0VfI3ry6lIKjpxOnbiwPEc89LH0vz7w+mAzfiz6hX45C5MHjSKk/9w3TEnYevBq6c5I8w9XML3vWs9XQs6j09dKadUmlc+8peuVqtOEsu7fNaFXa64GYtljmxIumkdlPsO9N590z5tPe3jQIKui2EeD78Ij1jCj8B9XXg4Xo2WTFvrlgAsWsfo77+lW8jkW9Y7Vo8/td8ayfwJ2CMrfHEg3dVI7EuHH9oGImhhsiMWx7+jFY5qsy2zOXa2kY79scJHvbOmIi+XCfNlyHTURgk7FZxWmQYtXWwmQMHrZdLaiDmHS3dYeWa8FmuSt8Jna/2C3/pU/H4W0x2j6V02I/6V/U5rg/2RfT8mk7WtQZL//C/6arraq+HaUWAAAAAElFTkSuQmCC"
            />
            Mohan Raj
          </Link>
        </div>
        <nav className="navBar">
          {navItems.map((navItem) => {
            return (
              <Link
                to={navItem.path}
                className={
                  navItem.id == currentItem ? "navItemActive" : "navItem"
                }
                onClick={() => setCurrentItem(navItem.id)}
              >
                {navItem.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
