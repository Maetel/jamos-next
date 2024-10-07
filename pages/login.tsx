import { FullScreenCenter } from "@/components/base";
import React from "react";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e?) => {
    e?.preventDefault?.();
    if (loading) {
      return;
    }
    setLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <FullScreenCenter>
      <div style={{ maxWidth: "200px" }}>
        <form onSubmit={handleSubmit}>
          <label style={{ width: "100%" }} htmlFor="username">
            아이디
          </label>
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder=""
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label style={{ width: "100%" }} htmlFor="password">
            비밀번호
          </label>
          <input
            style={{ width: "100%" }}
            type="password"
            placeholder=""
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button style={{ width: "100%" }} type="submit">
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </FullScreenCenter>
  );
}

export default Login;
