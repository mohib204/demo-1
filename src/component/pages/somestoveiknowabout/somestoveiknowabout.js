import React from 'react'
import './somestoveiknowabout.css'
function somestoveiknowabout() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to My Nostalgic Tech Journey</h1>
      </header>

      <main className="content">
        <section id="windows" className="section">
          <nav className="side-nav">
            <a href="#windows">Microsoft Windows</a>
          </nav>
          <h2>Microsoft Windows</h2>
          <p>When I was about 14, I used Windows 3.1. On this OS, I had MS Paint, Notepad, and other good stuff.</p>
        </section>

        <section id="aol" className="section">
          <nav className="side-nav">
            <a href="#aol">America Online</a>
          </nav>
          <h2>America Online (AOL)</h2>
          <p>
            Back then, America Online was version 4.0. It was the only way to get connected online using dial-up. 
            Dial-up connected at 56k Mbps through a phone line. DSL and cable were much faster but came later.
          </p>
        </section>

        <section id="storage" className="section">
          <nav className="side-nav">
            <a href="#storage">Storage Evolution</a>
          </nav>
          <h2>Storage Evolution</h2>
          <p>
            Growing up, we had floppy diskettes that held 14.4 MB of data. Then came CD-ROMs, which evolved to burn data, 
            and DVDs with dual layers and double sides for higher storage.
          </p>
        </section>

        <section id="cars" className="section">
          <nav className="side-nav">
            <a href="#cars">Cars</a>
          </nav>
          <h2>Cars</h2>
          <p>
            Cars used to run only on gas. Today, we have electric and hybrid cars. Hybrids use both gas and electricity, 
            making them more efficient and eco-friendly.
          </p>
        </section>
      </main>

    
    </div>

  )
}

export default somestoveiknowabout;
 