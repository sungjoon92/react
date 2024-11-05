import "./MySite.css";
function MySite() {
  return (
    <div id="MySite">
      <header>Header</header>
      <nav>Navigation</nav>

      <div className="mainContainer">
        <div className="mainBox">
          <span>Main content</span>
          <div className="about">About</div>
          <div className="recentPosts">RecentPosts</div>
        </div>
        <aside>Sidebar</aside>
      </div>

      <footer>Footer</footer>
    </div>
  );
}

export default MySite;
