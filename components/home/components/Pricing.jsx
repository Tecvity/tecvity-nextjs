"use client"
import React, { useState, useEffect } from 'react';
import { plansData } from '@/data/pricing';

const PricingTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">How Exactly <br /> are we better?</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center border-0 shadow-lg border-rounded-3">   
          <div className="col-lg-12">
          <div className="table-responsive ">
              <table className="table align-middle border-0" style={{ borderCollapse: 'separate', borderSpacing: isMobile ? '0' : '22px' }}>
                <thead>
                  <tr>
                  {!isMobile ? (<th className="border-0 align-middle"><h5>Compare Plans</h5></th>) : null}
                    {plansData.plans.map((plan, index) => (
                      <th key={index} className='text-center border-0 p-0'>
                        <div className="fw-bold">{plan.name}</div>
                        <div><h5 className='title'>{plan.price}</h5></div>
                        <div><p className="fa-1x fw-light text-muted">{plan.period}</p></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {isMobile ? (
                    plansData.headers.map((feature, rowIndex) => (
                      <React.Fragment key={rowIndex}>
                        <tr>
                          <td colSpan={plansData.plans.length + 1} className="border-0 bg-light">
                            {feature}
                          </td>
                        </tr>
                        <tr>
                          {plansData.plans.map((plan, colIndex) => (
                            <td key={colIndex} className='text-center border-0'>{plan.values[rowIndex]}</td>
                          ))}
                        </tr>
                      </React.Fragment>
                    ))
                  ) : (
                    plansData.headers.map((feature, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="border-0">{feature}</td>
                        {plansData.plans.map((plan, colIndex) => (
                          <td key={colIndex} className='text-center border-0'>{plan.values[rowIndex]}</td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
