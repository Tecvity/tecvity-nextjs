import React from 'react';
import Link from 'next/link';
import { plansData } from '@/data/pricing';

const PricingTable = () => {
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
              <table className="table align-middle border-0" style={{ borderCollapse: 'separate', borderSpacing: 22 }}>
                <thead>
                  <tr>
                    <th className="border-0 align-middle"><h5>Compare Plans</h5></th>
                    {plansData.plans.map((plan, index) => (
                      <th key={index} className='text-center border-0 m-3'>
                        <div className="fw-bold">{plan.name}</div>
                        <div><h5 className='title'>{plan.price}</h5></div>
                        <div><p className="fa-1x fw-light text-muted">{plan.period}</p></div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {plansData.headers.map((feature, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="border-0">{feature}</td>
                      {plansData.plans.map((plan, colIndex) => (
                        <td key={colIndex} className='text-center border-0'>{plan.values[rowIndex]}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="border-0">
                      <p className="text-muted fa-1x">Cancel Anytime</p>
                    </td>
                    {plansData.plans.map((plan, index) => (
                      <td key={index} className='text-center border-0'>
                        <Link
                          scroll={false}
                          href={plan.action.href}
                          className="btn style1 wow img-custom-anim-right animated"
                        >
                          <span className="link-effect">
                            <span className="effect-1">{plan.action.label}</span>
                            <span className="effect-1">{plan.action.label}</span>
                          </span>
                        </Link>
                      </td>
                    ))}
                  </tr>
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
