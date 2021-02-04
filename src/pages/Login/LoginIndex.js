import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const baseUrl = "http://localhost:3003";

function LoginIndex(){
    const [form, setForm] = useState({ email: "", password: "" });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
          history.push("/users");
        }
      });

      const onchange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
      };

      const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
          email: form.email,
          password: form.password
        };
        axios
          .post(
            baseUrl,
            body
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            history.push("/users");
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return (
        <div className="App">
          Login
          <div>
            <form onSubmit={onSubmitForm}>
              <input
                onChange={onchange}
                value={form.email}
                name={"email"}
                required
              />
              <br />
              <br />
              <input
                onChange={onchange}
                value={form.password}
                name={"password"}
                required
              />
              <br />
              <button>Fazer Login</button>
            </form>
          </div>
        </div>
      );
}

export default LoginIndex;