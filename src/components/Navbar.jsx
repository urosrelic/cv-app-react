export const Navbar = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='navbar'>
      <nav>
        <h1>CV Generator</h1>
        <div className='buttons'>
          <div id='print-btn' onClick={handlePrint}>
            <i className='fa-solid fa-print'></i>
          </div>
          <div id='load-example-btn'>
            <i className='fa-solid fa-id-card'></i>
          </div>
        </div>
      </nav>
    </div>
  );
};
