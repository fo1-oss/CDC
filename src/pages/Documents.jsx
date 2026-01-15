import PageHeader from '../components/PageHeader';

function Documents() {
  return (
    <section className="section active">
      <PageHeader
        title="Data Room"
        highlight="Documents"
      />

      {/* PITCH DECK INFOGRAPHIC */}
      <div className="infographic-card" style={{ marginBottom: '32px' }}>
        <div className="infographic-header lime">
          <div className="infographic-icon"><i className="fas fa-file-powerpoint"></i></div>
          <div className="infographic-title-wrap">
            <h3 className="infographic-title">Investor Pitch Deck</h3>
            <p className="infographic-subtitle">January 2026 - 28 Pages - The Complete Story</p>
          </div>
          <a href="https://drive.google.com/drive/folders/19UHG6yW0zXjsK-bbSMxrN7Qmfxzxt4xG" target="_blank" rel="noopener noreferrer" className="download-pill">
            <i className="fas fa-external-link-alt"></i> Open
          </a>
        </div>
        <div className="infographic-body">
          <div className="infographic-section">
            <div className="info-label">WHAT IS CDC? (In Simple Words)</div>
            <div className="simple-explain">
              <div className="explain-box">
                <div className="explain-icon">👟</div>
                <div className="explain-text">
                  <strong>India's #1 Premium Sneaker Store</strong>
                  <span>Like a Nike/Adidas store, but with rare & limited edition shoes you can't find anywhere else</span>
                </div>
              </div>
              <div className="explain-box">
                <div className="explain-icon">✅</div>
                <div className="explain-text">
                  <strong>100% Authentic Guarantee</strong>
                  <span>Every product is verified real - no fakes, unlike most online sellers</span>
                </div>
              </div>
              <div className="explain-box">
                <div className="explain-icon">🏪</div>
                <div className="explain-text">
                  <strong>3 Premium Stores + Website</strong>
                  <span>Physical stores in Delhi, Mumbai, Hyderabad + online shopping</span>
                </div>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">THE MONEY STORY</div>
            <div className="money-visual">
              <div className="money-year">
                <div className="money-bar" style={{ height: '40px', background: '#ddd' }}></div>
                <div className="money-value">₹12 Cr</div>
                <div className="money-label">FY23</div>
              </div>
              <div className="money-year">
                <div className="money-bar" style={{ height: '100px', background: '#9BBF1E' }}></div>
                <div className="money-value">₹65 Cr</div>
                <div className="money-label">FY24</div>
              </div>
              <div className="money-year">
                <div className="money-bar" style={{ height: '130px', background: '#6B8E23' }}></div>
                <div className="money-value">₹80 Cr</div>
                <div className="money-label">FY25</div>
              </div>
              <div className="money-year">
                <div className="money-bar" style={{ height: '180px', background: '#C0E529' }}></div>
                <div className="money-value">₹120 Cr</div>
                <div className="money-label">FY26 🎯</div>
              </div>
            </div>
            <div className="growth-badge">📈 10x Growth in 3 Years!</div>
          </div>

          <div className="infographic-section">
            <div className="info-label">HOW CDC MAKES MONEY</div>
            <div className="how-it-works">
              <div className="flow-step">
                <div className="flow-num">1</div>
                <div className="flow-icon">📦</div>
                <div className="flow-text">Get shoes from brands<br /><small>(No upfront payment!)</small></div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-num">2</div>
                <div className="flow-icon">🏪</div>
                <div className="flow-text">Sell in stores & online<br /><small>(₹12,500 avg sale)</small></div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-num">3</div>
                <div className="flow-icon">💵</div>
                <div className="flow-text">Keep 22% margin<br /><small>(Pay brands the rest)</small></div>
              </div>
            </div>
            <div className="margin-explain">
              <span className="margin-tag">💡 This means: For every ₹100 sale, CDC keeps ₹22 as profit!</span>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">WHY CDC WINS</div>
            <div className="comparison-simple">
              <div className="compare-row header">
                <div></div>
                <div className="compare-cdc">CDC</div>
                <div className="compare-others">Others</div>
              </div>
              <div className="compare-row">
                <div className="compare-label">Real Products?</div>
                <div className="compare-cdc"><span className="big-check">✅</span> 99%</div>
                <div className="compare-others"><span className="big-x">❌</span> 60-80%</div>
              </div>
              <div className="compare-row">
                <div className="compare-label">Delivered on time?</div>
                <div className="compare-cdc"><span className="big-check">✅</span> 98%</div>
                <div className="compare-others"><span className="big-x">❌</span> 10-60%</div>
              </div>
              <div className="compare-row">
                <div className="compare-label">Physical Stores?</div>
                <div className="compare-cdc"><span className="big-check">✅</span> 3 Stores</div>
                <div className="compare-others"><span className="big-x">❌</span> None/Few</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MIS INFOGRAPHIC */}
      <div className="infographic-card" style={{ marginBottom: '32px' }}>
        <div className="infographic-header olive">
          <div className="infographic-icon"><i className="fas fa-chart-bar"></i></div>
          <div className="infographic-title-wrap">
            <h3 className="infographic-title">MIS & Operational Metrics</h3>
            <p className="infographic-subtitle">YTD FY26 (Apr-Dec 2025) - Live Business Data</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1bM7sVd6rP59sfDIckzfV4nXHrNOkMjhm" target="_blank" rel="noopener noreferrer" className="download-pill">
            <i className="fas fa-external-link-alt"></i> Open
          </a>
        </div>
        <div className="infographic-body">
          <div className="infographic-section">
            <div className="info-label">CURRENT PERFORMANCE (9 Months)</div>
            <div className="big-metrics">
              <div className="big-metric lime-bg">
                <div className="big-metric-value">₹93.3 Cr</div>
                <div className="big-metric-label">Total Sales (GMV)</div>
                <div className="big-metric-explain">💡 Money collected from customers</div>
              </div>
              <div className="big-metric white-bg">
                <div className="big-metric-value">₹88.5 Cr</div>
                <div className="big-metric-label">Net Revenue</div>
                <div className="big-metric-explain">💡 After returns & discounts</div>
              </div>
              <div className="big-metric olive-bg">
                <div className="big-metric-value">18%</div>
                <div className="big-metric-label">Gross Margin</div>
                <div className="big-metric-explain">💡 Profit before expenses</div>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">WHERE DOES MONEY COME FROM?</div>
            <div className="channel-visual">
              <div className="channel-bar">
                <div className="channel-retail" style={{ width: '59%' }}>
                  <span className="channel-icon">🏬</span>
                  <span className="channel-pct">59%</span>
                  <span className="channel-name">Stores</span>
                </div>
                <div className="channel-online" style={{ width: '41%' }}>
                  <span className="channel-icon">💻</span>
                  <span className="channel-pct">41%</span>
                  <span className="channel-name">Online</span>
                </div>
              </div>
              <div className="channel-details">
                <div className="channel-detail">
                  <span className="detail-emoji">🏬</span>
                  <span><strong>Stores:</strong> ₹55 Cr - Higher profit (24% margin) - Premium experience</span>
                </div>
                <div className="channel-detail">
                  <span className="detail-emoji">💻</span>
                  <span><strong>Online:</strong> ₹38 Cr - Lower cost - Reaches all India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">STORE-BY-STORE BREAKDOWN</div>
            <div className="store-bars">
              <div className="store-bar-item">
                <div className="store-bar-header">
                  <span className="store-bar-name">📍 Delhi</span>
                  <span className="store-bar-value">₹27 Cr</span>
                </div>
                <div className="store-bar-track">
                  <div className="store-bar-fill-inner" style={{ width: '100%', background: 'var(--lime)' }}></div>
                </div>
                <div className="store-bar-info">Flagship - 4,000 sqft - Since Feb 2022</div>
              </div>
              <div className="store-bar-item">
                <div className="store-bar-header">
                  <span className="store-bar-name">📍 Mumbai</span>
                  <span className="store-bar-value">₹16 Cr</span>
                </div>
                <div className="store-bar-track">
                  <div className="store-bar-fill-inner" style={{ width: '59%', background: 'var(--olive)' }}></div>
                </div>
                <div className="store-bar-info">Premium Location - 2,500 sqft - Since May 2023</div>
              </div>
              <div className="store-bar-item">
                <div className="store-bar-header">
                  <span className="store-bar-name">📍 Hyderabad</span>
                  <span className="store-bar-value">₹12 Cr</span>
                </div>
                <div className="store-bar-track">
                  <div className="store-bar-fill-inner" style={{ width: '44%', background: 'var(--olive-dark)' }}></div>
                </div>
                <div className="store-bar-info">Newest Store - 3,700 sqft - Since Oct 2024</div>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">WHAT SELLS MOST?</div>
            <div className="product-mix-visual">
              <div className="product-item">
                <div className="product-icon-wrap shoes">👟</div>
                <div className="product-info">
                  <div className="product-name">Sneakers & Shoes</div>
                  <div className="product-pct-bar"><div style={{ width: '70%', background: 'var(--lime)' }}></div></div>
                  <div className="product-pct">70% of sales</div>
                </div>
              </div>
              <div className="product-item">
                <div className="product-icon-wrap apparel">👕</div>
                <div className="product-info">
                  <div className="product-name">Streetwear & Apparel</div>
                  <div className="product-pct-bar"><div style={{ width: '25%', background: 'var(--olive)' }}></div></div>
                  <div className="product-pct">25% of sales</div>
                </div>
              </div>
              <div className="product-item">
                <div className="product-icon-wrap accessories">🎒</div>
                <div className="product-info">
                  <div className="product-name">Accessories</div>
                  <div className="product-pct-bar"><div style={{ width: '5%', background: 'var(--olive-dark)' }}></div></div>
                  <div className="product-pct">5% of sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINANCIALS FY24 INFOGRAPHIC */}
      <div className="infographic-card" style={{ marginBottom: '32px' }}>
        <div className="infographic-header black">
          <div className="infographic-icon"><i className="fas fa-file-invoice-dollar"></i></div>
          <div className="infographic-title-wrap">
            <h3 className="infographic-title">Audited Financials FY24</h3>
            <p className="infographic-subtitle">April 2023 - March 2024 - Official Accounts</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1W5KzPuaOyhZvsTikFjlmPDxu5PuJ2XBy" target="_blank" rel="noopener noreferrer" className="download-pill">
            <i className="fas fa-external-link-alt"></i> Open
          </a>
        </div>
        <div className="infographic-body">
          <div className="infographic-section">
            <div className="info-label">BALANCE SHEET EXPLAINED (What CDC Owns & Owes)</div>
            <div className="balance-visual">
              <div className="balance-side owns">
                <div className="balance-title">✅ WHAT CDC OWNS (Assets)</div>
                <div className="balance-total">₹1.57 Crore</div>
                <div className="balance-items">
                  <div className="balance-item">
                    <span className="balance-icon">🏪</span>
                    <span className="balance-name">Store Equipment & Fixtures</span>
                    <span className="balance-val">₹16 L</span>
                  </div>
                  <div className="balance-item">
                    <span className="balance-icon">📦</span>
                    <span className="balance-name">Inventory (Products)</span>
                    <span className="balance-val">₹49 L</span>
                  </div>
                  <div className="balance-item">
                    <span className="balance-icon">💵</span>
                    <span className="balance-name">Cash in Bank</span>
                    <span className="balance-val">₹67 L</span>
                  </div>
                  <div className="balance-item">
                    <span className="balance-icon">📄</span>
                    <span className="balance-name">Money Owed to CDC</span>
                    <span className="balance-val">₹3.8 L</span>
                  </div>
                </div>
              </div>
              <div className="balance-side owes">
                <div className="balance-title">💳 WHAT CDC OWES (Liabilities)</div>
                <div className="balance-total">₹51.5 Lakh</div>
                <div className="balance-items">
                  <div className="balance-item">
                    <span className="balance-icon">🏦</span>
                    <span className="balance-name">Founder Loans</span>
                    <span className="balance-val">₹3.3 L</span>
                  </div>
                  <div className="balance-item">
                    <span className="balance-icon">🏢</span>
                    <span className="balance-name">Supplier Payments Due</span>
                    <span className="balance-val">₹34 L</span>
                  </div>
                  <div className="balance-item">
                    <span className="balance-icon">📋</span>
                    <span className="balance-name">Other Payables</span>
                    <span className="balance-val">₹14 L</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="net-worth-box">
              <span className="net-worth-label">🎯 NET WORTH (Owns - Owes)</span>
              <span className="net-worth-value">₹1.05 Crore</span>
              <span className="net-worth-explain">💡 This is the company's real value after paying all debts</span>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">PROFIT & LOSS EXPLAINED (Did CDC Make or Lose Money?)</div>
            <div className="pnl-visual">
              <div className="pnl-item income">
                <div className="pnl-icon">💰</div>
                <div className="pnl-details">
                  <div className="pnl-label">Total Sales Revenue</div>
                  <div className="pnl-value">₹65.5 Crore</div>
                </div>
              </div>
              <div className="pnl-minus">−</div>
              <div className="pnl-item expense">
                <div className="pnl-icon">💸</div>
                <div className="pnl-details">
                  <div className="pnl-label">Cost of Products</div>
                  <div className="pnl-value">₹54 Crore</div>
                </div>
              </div>
              <div className="pnl-minus">−</div>
              <div className="pnl-item expense">
                <div className="pnl-icon">🏢</div>
                <div className="pnl-details">
                  <div className="pnl-label">Operating Costs</div>
                  <div className="pnl-value">₹11.5 Crore</div>
                </div>
              </div>
              <div className="pnl-equals">=</div>
              <div className="pnl-item result loss">
                <div className="pnl-icon">📉</div>
                <div className="pnl-details">
                  <div className="pnl-label">Net Loss</div>
                  <div className="pnl-value">-₹77 Lakh</div>
                </div>
              </div>
            </div>
            <div className="loss-explain">
              <div className="loss-reason">
                <span className="reason-icon">🔥</span>
                <span className="reason-text"><strong>Why the loss?</strong> Mumbai store had a fire in May 2024, disrupting 2 months of operations. Without this, CDC would have been profitable!</span>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">KEY FINANCIAL RATIOS (Health Check)</div>
            <div className="ratios-grid">
              <div className="ratio-card good">
                <div className="ratio-name">Current Ratio</div>
                <div className="ratio-value">2.69</div>
                <div className="ratio-status">✅ Healthy</div>
                <div className="ratio-explain">💡 Can pay bills 2.7x over. Good!</div>
              </div>
              <div className="ratio-card good">
                <div className="ratio-name">Debt-to-Equity</div>
                <div className="ratio-value">0.49</div>
                <div className="ratio-status">✅ Low Debt</div>
                <div className="ratio-explain">💡 Not over-leveraged. Safe!</div>
              </div>
              <div className="ratio-card excellent">
                <div className="ratio-name">Inventory Turnover</div>
                <div className="ratio-value">26.5x</div>
                <div className="ratio-status">🌟 Excellent</div>
                <div className="ratio-explain">💡 Products sell fast. Very efficient!</div>
              </div>
              <div className="ratio-card neutral">
                <div className="ratio-name">Net Profit Margin</div>
                <div className="ratio-value">-1%</div>
                <div className="ratio-status">⚠️ Loss Year</div>
                <div className="ratio-explain">💡 Due to Mumbai fire incident</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINANCIALS FY23 INFOGRAPHIC */}
      <div className="infographic-card" style={{ marginBottom: '32px' }}>
        <div className="infographic-header olive">
          <div className="infographic-icon"><i className="fas fa-file-invoice-dollar"></i></div>
          <div className="infographic-title-wrap">
            <h3 className="infographic-title">Audited Financials FY23</h3>
            <p className="infographic-subtitle">Sep 2022 - March 2023 - First Year of Pvt Ltd</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1W5KzPuaOyhZvsTikFjlmPDxu5PuJ2XBy" target="_blank" rel="noopener noreferrer" className="download-pill">
            <i className="fas fa-external-link-alt"></i> Open
          </a>
        </div>
        <div className="infographic-body">
          <div className="infographic-section">
            <div className="info-label">FIRST YEAR HIGHLIGHTS (Only 6 Months!)</div>
            <div className="first-year-stats">
              <div className="fy-stat">
                <div className="fy-stat-icon">💰</div>
                <div className="fy-stat-value">₹12.46 Cr</div>
                <div className="fy-stat-label">Revenue in 6 months</div>
              </div>
              <div className="fy-stat">
                <div className="fy-stat-icon">✅</div>
                <div className="fy-stat-value">₹18.5 L</div>
                <div className="fy-stat-label">Net Profit</div>
              </div>
              <div className="fy-stat">
                <div className="fy-stat-icon">🏪</div>
                <div className="fy-stat-value">1</div>
                <div className="fy-stat-label">Store (Delhi)</div>
              </div>
              <div className="fy-stat">
                <div className="fy-stat-icon">💵</div>
                <div className="fy-stat-value">₹2.63 Cr</div>
                <div className="fy-stat-label">Cash in Bank</div>
              </div>
            </div>
            <div className="fy23-note">
              <span className="note-icon">💡</span>
              <span className="note-text"><strong>Key Point:</strong> This was CDC's first year as a Private Limited company. Started with just 1 store in Delhi and was already profitable!</span>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">FY23 vs FY24 GROWTH</div>
            <div className="growth-comparison">
              <div className="growth-metric">
                <div className="growth-label">Revenue</div>
                <div className="growth-bars">
                  <div className="growth-bar-row">
                    <span className="growth-year">FY23</span>
                    <div className="growth-fill" style={{ width: '19%' }}></div>
                    <span className="growth-val">₹12.5 Cr</span>
                  </div>
                  <div className="growth-bar-row fy24">
                    <span className="growth-year">FY24</span>
                    <div className="growth-fill" style={{ width: '100%' }}></div>
                    <span className="growth-val">₹65.5 Cr</span>
                  </div>
                </div>
                <div className="growth-pct">📈 5.2x Growth!</div>
              </div>
              <div className="growth-metric">
                <div className="growth-label">Stores</div>
                <div className="growth-bars">
                  <div className="growth-bar-row">
                    <span className="growth-year">FY23</span>
                    <div className="growth-fill" style={{ width: '33%' }}></div>
                    <span className="growth-val">1 Store</span>
                  </div>
                  <div className="growth-bar-row fy24">
                    <span className="growth-year">FY24</span>
                    <div className="growth-fill" style={{ width: '66%' }}></div>
                    <span className="growth-val">2 Stores</span>
                  </div>
                </div>
                <div className="growth-pct">📈 +Mumbai Added!</div>
              </div>
              <div className="growth-metric">
                <div className="growth-label">Net Worth</div>
                <div className="growth-bars">
                  <div className="growth-bar-row">
                    <span className="growth-year">FY23</span>
                    <div className="growth-fill" style={{ width: '42%' }}></div>
                    <span className="growth-val">₹43.8 L</span>
                  </div>
                  <div className="growth-bar-row fy24">
                    <span className="growth-year">FY24</span>
                    <div className="growth-fill" style={{ width: '100%' }}></div>
                    <span className="growth-val">₹1.05 Cr</span>
                  </div>
                </div>
                <div className="growth-pct">📈 2.4x Growth!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INVESTOR FAQ INFOGRAPHIC */}
      <div className="infographic-card" style={{ marginBottom: '32px' }}>
        <div className="infographic-header lime">
          <div className="infographic-icon"><i className="fas fa-question-circle"></i></div>
          <div className="infographic-title-wrap">
            <h3 className="infographic-title">Investor FAQ</h3>
            <p className="infographic-subtitle">27+ Questions Answered - November 2025</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1tEKigXvDH5w28onKJCXJZyRw608mdl8x" target="_blank" rel="noopener noreferrer" className="download-pill">
            <i className="fas fa-external-link-alt"></i> Open
          </a>
        </div>
        <div className="infographic-body">
          <div className="infographic-section">
            <div className="info-label">TOP INVESTOR QUESTIONS (Quick Answers)</div>
            <div className="faq-grid">
              <div className="faq-item">
                <div className="faq-q">What does CDC sell?</div>
                <div className="faq-a">Premium sneakers (Nike, Adidas, Jordan, Yeezy), streetwear, and accessories - all 100% authentic</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">How does CDC make money?</div>
                <div className="faq-a">22% margin on each sale. Gets products from brands, sells to customers, keeps the difference</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">What is SOR model?</div>
                <div className="faq-a">"Sell Or Return" - CDC doesn't pay upfront for inventory. Only pays brands after selling. Zero risk!</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">Who are the customers?</div>
                <div className="faq-a">Urban males, 14-35 years, earning ₹10-50 LPA. Sneakerheads & fashion enthusiasts</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">What's the market size?</div>
                <div className="faq-a">₹15,150 Cr today → ₹35,000 Cr by 2030. CDC targets 3% = ₹1,000 Cr revenue</div>
              </div>
              <div className="faq-item">
                <div className="faq-q">Why invest now?</div>
                <div className="faq-a">10x growth in 3 years, market leader, capital-efficient model, scaling to 10+ stores</div>
              </div>
            </div>
          </div>

          <div className="infographic-section">
            <div className="info-label">FAQ COVERS THESE TOPICS</div>
            <div className="topics-visual">
              <div className="topic-tag"><span>🏢</span> Company Overview</div>
              <div className="topic-tag"><span>💼</span> Business Model</div>
              <div className="topic-tag"><span>💰</span> Revenue & Financials</div>
              <div className="topic-tag"><span>📊</span> Market Analysis</div>
              <div className="topic-tag"><span>🏆</span> Competition</div>
              <div className="topic-tag"><span>📈</span> Growth Strategy</div>
              <div className="topic-tag"><span>🏪</span> Store Economics</div>
              <div className="topic-tag"><span>💵</span> Funding Plans</div>
              <div className="topic-tag"><span>👥</span> Team & Leadership</div>
              <div className="topic-tag"><span>⚠️</span> Risk Factors</div>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD ALL SECTION */}
      <div className="download-all-section">
        <div className="download-all-content">
          <div className="download-all-icon">📁</div>
          <div className="download-all-text">
            <h3>Access Complete Data Room</h3>
            <p>Open Google Drive folder with all documents - Pitch Deck, MIS, Financials, FAQ & more</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1Y8seSfR-Lpy-ESndy08BE0kk0G4gElJ2" target="_blank" rel="noopener noreferrer" className="download-all-btn">
            <i className="fas fa-external-link-alt"></i> Open Data Room
          </a>
        </div>
      </div>
    </section>
  );
}

export default Documents;
