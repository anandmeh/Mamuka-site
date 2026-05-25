export default function Privacy() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Introduction</h2>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
          Mamuka ("we", "our", or "us") operates the mamuka-site website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Information Collection and Use</h2>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>
        <h3 style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Types of Data Collected:</h3>
        <ul style={{ marginLeft: '2rem', color: '#ccc', lineHeight: '1.8' }}>
          <li><strong>Personal Data:</strong> Contact information you voluntarily provide through our contact form</li>
          <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time and date of visits</li>
          <li><strong>Cookies:</strong> We may use cookies to track activity on our Service</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Use of Data</h2>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
          Mamuka uses the collected data for various purposes:
        </p>
        <ul style={{ marginLeft: '2rem', color: '#ccc', lineHeight: '1.8' }}>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our Service</li>
          <li>To monitor the usage of our Service</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Security of Data</h2>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
          The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Us</h2>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:hello@mamuka.dk" style={{ color: '#64b5f6', textDecoration: 'none' }}>
            hello@mamuka.dk
          </a>
        </p>
      </section>
    </div>
  )
}
