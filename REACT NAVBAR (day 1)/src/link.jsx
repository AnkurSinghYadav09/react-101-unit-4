let head = [{ name: "services" }, { name: "projects" }, { name: "about" }];

export const Link = () => {
  return head.map((elem,index) => {
    return (
      <div style={{color:"white" , }}>
        <p>{elem.name}</p>
      </div>
    );
  });
};
