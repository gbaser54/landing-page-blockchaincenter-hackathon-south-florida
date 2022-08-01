import next from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>South Florida Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <link href='https://fonts.googleapis.com/css?family=Work Sans' rel='stylesheet'></link>
      </Head>

      <main className={styles.AllExceptFooter}>
      <div className={styles.NavBar}>
          <div className={styles.NavLogo}>
          <Link href="/"><a><img src="/logo.png"></img></a></Link>
          </div>
          <div className={styles.NavLink}>
          <Link href="/track"><a >Tracks</a></Link>
          <Link href="/schedule"><a>Schedule</a></Link>
          <Link href="/prizes"><a>Prizes</a></Link>
          </div>
        </div>
        


 <div className={styles.SouthFloridaHackathon}>
          <div className={styles.Description}>
          <p className={styles.Para}> <span className={styles.palm}>Palm Beach, Florida</span> &nbsp; | &nbsp;<span className={styles.dates}>August 18 - 21</span>
          </p>
          <h1 className={styles.Heading}>
        South Florida Hackathon
          </h1>

        <p className={styles.DescriptionPara}> 
        Blockchain Center is pairing with Crypto Connect Expo to advance <br></br>
        South Florida's web3 tech ecosystem. We are making this possible <br></br>
        through a South Florida centric conference and hackathon.
        </p>
        <button className={styles.ApplyButton}>Apply to Hack</button>
       </div>

        <div className={styles.PhotoHackathon}>
        <img src="/graphic.png"></img>
        </div>

       </div>






<div className={styles.web3}>
  <div className={styles.web3image}>
    <img src="/web3image.png"></img>
  </div>

  <div className={styles.web3description}>
<div className={styles.oneliner} id="track1">Track 1</div>
<div className={styles.web3heading}>
  Web3 for South Florida<br></br>Social Impact
</div>
<div className={styles.web3para}>
Have Hacker work on South Florida specific
solutions and help<br></br> empower the region
</div>

  </div>

</div>






<div className={styles.web3}>

  <div className={styles.blockchaindescription}>
<div className={styles.oneliner}>Track 2</div>
<div className={styles.web3heading}>
  Blockchain Gaming
</div>
<div className={styles.web3para}>
Blockchain gaming and play to earn is primed to
be the next major<br></br> wave in the web3 space, take advantage and show case your project
</div>

  </div>

  <div className={styles.blockchaingamingimage}>
    <img src="/blockchaingaming.png"></img>
  </div>

</div>


<div className={styles.web3}>
  <div className={styles.web3image}>
    <img src="/fintechimage.png"></img>
  </div>

  <div className={styles.web3description}>
<div className={styles.oneliner}>Track 1</div>
<div className={styles.web3heading}>
  Fintech & Analysis
</div>
<div className={styles.web3para}>
Bring developers, analysts, and designers
together to build financial<br></br> projects
</div>

  </div>

</div>

<div className={styles.Schedule}>
<div className={styles.Scheduleheading} id="schedule">
  Schedule
</div>

<div className={styles.Schedulepara}>
Bring developers, analysts, and designers
together to build financial projects
</div>



<div className={styles.textandsponsors}>

<div className={styles.text}>
<div className={styles.web3heading}>
  Partners
</div>
<div className={styles.web3para}>
Making the event possible!
</div>
</div>

<div className={styles.sponsors}>
<div className={styles.photo}><img src="/photo_1.png"></img></div>
<div className={styles.photo}><img src="/MPCR logo 1.png"></img></div>
<div className={styles.photo}><img src="/bc-logo 1.png"></img></div>
<div className={styles.photo}><img src="/image 4.png"></img></div>
<div className={styles.photo}><img src="/miami_edtech logo 1.png"></img></div>
<div className={styles.photo}><img src="/BrowardBitcoiners_logo 1.png"></img></div>
</div>




</div>


<div className={styles.schedulepart}>
<div className={styles.schedulepartinfo}>
  <div className={styles.date}>
    Thu,Jun 23rd
  </div>
<div className={styles.time}>
  2:00 pm EDT
</div>
<div className={styles.duration}>
(duration comes here - (30 minutes))
</div>
</div>
<div className={styles.blank}>
  <input type="text" placeholder="Topics comes here"></input>
</div>

</div>

<div className={styles.schedulepart}>
<div className={styles.schedulepartinfo}>
  <div className={styles.date}>
    Thu,Jun 23rd
  </div>
<div className={styles.time}>
  2:00 pm EDT
</div>
<div className={styles.duration}>
(duration comes here - (30 minutes))
</div>
</div>
<div className={styles.blank}>
  <input type="text" placeholder="Topics comes here"></input>
</div>
</div>

</div>

<div className={styles.prizes}>

<div className={styles.Scheduleheading} id="prices">
  Prizes
</div>

<div className={styles.Schedulepara}>
Bring developers, analysts, and designers
together to build financial projects
</div>

</div>





       </main>

       <div className={styles.footer}>
        <div className={styles.footerimage}>
          <img src="/footer-image.png"></img>
        </div>
        <div className={styles.contactdetails}>
          Contact Details:<br></br>Email<br></br>Address

        </div>
       </div>
        

      </div>
    
  )
}