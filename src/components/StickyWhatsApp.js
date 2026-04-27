"use client";

export default function StickyWhatsApp() {
  const phoneNumber = "905468520701";
  const message = "Merhaba, BMA ürünleri hakkında detaylı bilgi almak istiyorum.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
        textDecoration: 'none',
        fontSize: '30px'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      💬
    </a>
  );
}
