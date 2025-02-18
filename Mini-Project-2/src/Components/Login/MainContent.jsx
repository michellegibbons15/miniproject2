import AuthForm from "./AuthForm";
import swimImg from "../../assets/login/swim.jpg"
import "../../Styles/Login/MainContent.css"

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="picture">
        <img src={swimImg} alt="swimming" />
      </div>
      <AuthForm />
    </main>
  );
}