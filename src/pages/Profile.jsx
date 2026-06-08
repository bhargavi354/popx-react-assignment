import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h3>Account Settings</h3>

        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="avatar"
          />

          <div>
            <h4>Marry Doe</h4>
            <p>marry@example.com</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat.
        </p>
      </div>
    </div>
  );
}

export default Profile;