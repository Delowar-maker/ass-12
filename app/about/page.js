import React from "react";
import Layout from "../../components/Layout";

const page = () => {
  return (
    <div >
      <Layout>
        <div className="grid grid-cols-2 gap-4 place-content-center">
        <section className="justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                About Us
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Next.js</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  We are a team of passionate bloggers...
                </div>
                <div className="badge badge-outline">Hard working</div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
              Our Mission
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Next.js</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  We are a team of passionate bloggers...
                </div>
                <div className="badge badge-outline">Hard working</div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </Layout>
     
    </div>
  );
};

export default page;
