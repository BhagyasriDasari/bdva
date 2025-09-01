import React, { useState } from "react";
import "./ProductPage.css";

export default function ProductPage() {
  const [payment, setPayment] = useState("one-time");
  const [qty, setQty] = useState(1);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="product-page">
      {/* HERO SECTION */}
      <section className="hero">
        {/* LEFT IMAGES */}
        <div className="left-col">
          <div className="main-img">
            <img
              src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756650853/manuka-honey-nz-umf24-125g-708601.png_aqhkd1.png"
              alt="Manuka Honey UMF 24+"
            />
          </div>

          <div className="gallery">
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655102/Item_Link_ujv5gv.png" alt="Gallery 1" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655124/Item_Link_cffrzx.png" alt="Gallery 2" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655171/Item_Link_okg0ok.png" alt="Gallery 3" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655202/Item_Link_agdtfr.png" alt="Gallery 4" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655250/Item_Link_ewebxa.png" alt="Gallery 5" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655275/Item_Link_ebkuiv.png" alt="Gallery 6" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655293/Item_Link_tivs6m.png" alt="Gallery 7" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right-col">
          <h1 className="title">
            Manuka Honey <br />
            UMF™ 24+ <br />
            MGO 1122+
          </h1>
          <p className="reviews">⭐ 4.9 (653 reviews)</p>

          <button className="info-btn" onClick={() => setShowInfo(true)}>
            ℹ What is UMF and MGO?
          </button>

          {showInfo && (
            <div className="info-card">
              <p>
                <b>UMF</b> is the strength and purity rating of Manuka honey.
              </p>
              <div className="scale-bar red"></div>
              <p>
                <b>MGO</b> is the key natural compound that gives Manuka honey
                its antibacterial strength.
              </p>
              <div className="scale-bar blue"></div>
              <button className="close-btn" onClick={() => setShowInfo(false)}>
                Close
              </button>
            </div>
          )}

          <p className="desc">
            For those times in life when quality comes first. This pure UMF™ 24+
            Manuka Honey is extremely potent. Sourced from wild rugged locations
            around Aotearoa New Zealand and great for almost all uses. It has a
            full delicious flavour and your body will love you for it.
          </p>

          <div className="cert-icons">
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756690881/certifications_zti75d.png" alt="Cert1" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756690901/certifications_jjv5rr.png" alt="Cert2" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756690928/certifications_me3jaa.png" alt="Cert3" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756690945/certifications_w3aoso.png" alt="Cert4" />
            <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756690963/certifications_ah6imi.png" alt="Cert5" />
          </div>

          {/* PURCHASE SECTION */}
          <section className="purchase">
            <h3>Size (Select One)</h3>
            <div className="variants">
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655315/Label_Label_paints_mqoatf.png" alt="125g" />
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655336/Label_Label_paints_hjnxdw.png" alt="250g" />
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655349/Label_Label_paints_vpt7ru.png" alt="500g" />
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655336/Label_Label_paints_hjnxdw.png" alt="600g" />
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655374/Label_Label_paints_hl0zjk.png" alt="700g" />
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655396/Label_Label_paints_l1csfy.png" alt="800g" />
              <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756655421/Label_Label_paints_aqdbl7.png" alt="900g" />
            </div>

            <h3>Payment Options (Select One)</h3>
            <div className="payments">
              <button
                className={`pay-btn ${payment === "one-time" ? "active" : ""}`}
                onClick={() => setPayment("one-time")}
              >
                One-time purchase <span className="price">$55.89 USD</span>
              </button>
              <button
                className={`pay-btn ${payment === "subscribe" ? "active" : ""}`}
                onClick={() => setPayment("subscribe")}
              >
                Subscribe & Save 20% <span className="price">$44.70 USD</span>
              </button>
            </div>

            <div className="cart-actions">
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className="add-cart">Add to Cart</button>
            </div>

             <div className="bundle-container">
      {/* Header */}
      <div className="bundle-header">
        <h2>Beauty Bundle</h2>
        <span className="save-text">Save 10%</span>
      </div>

      {/* Products */}
      <div className="bundle-products">
        <div className="product">
          <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756693935/image_hdcuao.png" alt="UMF 24+" />
          <p>UMF 20+</p>
          <select>
            <option>250g</option>
            <option>500g</option>
          </select>
        </div>

        <span className="plus">+</span>

        <div className="product">
          <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756693956/image_gjhd8p.png" alt="Wooden Spoon" />
          <p>UMF 24+</p>
          <select>
            <option>250g</option>
            <option>500g</option>
          </select>
        </div>

        <span className="plus">+</span>
        <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756693975/image_152_dlzdzo.png" alt="UMF 20+" />
        <div className="product">
          <p>Wooden Spoon</p>
        </div>
      </div>

      {/* Price */}
      <div className="price-section">
        <span className="old-price">$478.75 USD</span>
        <span className="new-price">$430.88 USD</span>
      </div>

      {/* Add to Cart */}
      <button className="add-btn">ADD BUNDLE TO CART</button>

      {/* Rewards */}
      <p className="rewards">
        Colourclub members earn up to <b>56</b> reward points when buying this
        item.
      </p>

      {/* Delivery Info */}
      <div className="delivery-info">
        <p>DELIVERY: Free delivery on orders over $30</p>
        <p>ESTIMATED DELIVERY DATE: Jun 9 - Jun 13</p>
        <p>
          AFTERPAY: 4 interest-free payments of $13.97 with{" "}
          <span className="afterpay">Afterpay</span>
        </p>
      </div>

      {/* UMF Scale */}
      <div className="scale">
        <p className="scale-title">UMF™ SCALE</p>
        <div className="scale-labels">
          <span>UMF™ 10+</span>
          <span>UMF™ 15+</span>
          <span>UMF™ 20+</span>
          <span className="highlight">UMF™ 24+</span>
          <span>UMF™ 26+</span>
          <span>UMF™ 28+</span>
          <span>UMF™ 30+</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div>
        </div>
      </div>

      {/* Taste Profile */}
      <div className="taste">
        <p className="scale-title">TASTE PROFILE</p>
        <div className="scale-labels">
          <span>Clean & Intense</span>
          <span>Bold & Intense</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>
  );
}
          </section>
        </div>
      </section>
    </div>
  );
}
