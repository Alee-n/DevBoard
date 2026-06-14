type ProfileProps = {
  name: string;
  goal: string;
};

function Profile(props: ProfileProps) {
  return (
      <div>
          <h2>{props.name}</h2>
          <p>{props.goal}</p>
      </div>
  );
}

export default Profile;