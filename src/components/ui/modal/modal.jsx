import React from "react";

const modal = () => {
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 w-[124px] h-[40px] inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#2E308D] text-white hover:bg-[#91BAE5] focus:outline-none focus:bg-[#2E308D] disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-large-modal"
        data-hs-overlay="#hs-large-modal"
      >
        <img
          src="images/log@2x.png"
          alt="log"
          className="flex items-center w-[16px] h-[16px]"
        />
        <span className="flex items-center  w-[112px] h-[18px] textStyle-regular-600">
          View Logs
        </span>
      </button>

      <div
        id="hs-large-modal"
        className="hs-overlay rounded-3xl hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-large-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto light:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center py-3 px-4 dark:border-neutral-700">
              <h2
                id="hs-large-modal-label"
                className="w-[90px] h-[29px] text-2xl textStyle-regular-600 text-[#000048] uppercase"
              >
                Log
              </h2>
              <button
                type="button"
                className="py-3 px-5 relative left-64 w-[167px] h-[40px] inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#2E308D] text-white hover:bg-[#91BAE5] focus:outline-none focus:bg-[#2E308D] disabled:opacity-50 disabled:pointer-events-none"
              >
                <img
                  src="images/log@2x.png"
                  alt="log"
                  className="flex items-center w-[16px] h-[16px]"
                />
                <span className="flex items-center  w-[112px] h-[18px] textStyle-regular-600">
                  Download Logs
                </span>
              </button>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none #91BAE5:hover:bg-neutral-600 light:text-neutral-400 light:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-large-modal"
              >
                <span className="sr-only">Close</span>
                <img
                  src="images/Close@2x.png"
                  alt="Close"
                  className="shrink-0 size-4 w-[30px] h-[30px] close-button"
                ></img>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg textStyle-regular-600 text-[#000048] dark:text-dark">
                    Timestamp:
                    <h3 className="ml-[250px] inline-flex text-lg textStyle-regular-600 text-[#000048] dark:text-dark">
                      Role:
                    </h3>
                    <div className="mt-1 textStyle-regular-600 text-[#2F78C3]">
                      2023-11-28 23:32:19
                      <div className="ml-[180px] inline-flex justify-between ">
                        Agent
                      </div>
                    </div>
                  </h3>
                </div>
                <div>
                  <h3 className="flex justify-start mt-8 text-lg textStyle-regular-600 text-[#000048] dark:text-dark">
                    Thought:
                  </h3>
                  <p className="inline-flex justify-start textStyle-regular-600 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum natus pariatur voluptas quas inventore voluptates
                    praesentium magnam earum aperiam perspiciatis, fuga odio
                    dolorem temporibus facere deserunt aut mollitia! Nihil hic
                    recusandae tempora repellat quibusdam molestias pariatur
                    nemo. Asperiores veniam dolores reiciendis atque! Voluptas
                    libero aliquam saepe, ipsum quibusdam necessitatibus a
                    itaque at deleniti repellat et perspiciatis nam recusandae,
                    nihil, corrupti impedit earum fugiat placeat deserunt fugit
                    totam aperiam alias perferendis voluptate! Ut veniam sunt,
                    hic soluta voluptatem facilis eveniet, ducimus est molestias
                    nam repudiandae placeat quaerat ullam dolores distinctio
                    libero voluptatibus suscipit esse! Ad, sit ducimus
                    repellendus officiis magnam aperiam omnis incidunt quas
                    tempore commodi ipsam totam odit? Provident iusto culpa
                    molestiae fuga enim quam rerum dolore sapiente quaerat
                    soluta cupiditate sint facere tenetur atque vel suscipit
                    odio delectus, nobis rem doloribus velit officia aperiam!
                    Aut voluptates sapiente iste nisi alias laboriosam magni,
                    amet molestiae quod voluptas dolore porro doloremque dolores
                    optio quia unde officia dolor accusamus ipsa enim! Ratione
                    unde quas dolorem neque consequuntur obcaecati doloribus
                    distinctio ipsa eaque nostrum minima quo qui expedita
                    maxime, pariatur odit tenetur! Possimus, laborum, culpa eius
                    officiis, velit eum quibusdam inventore cumque magni
                    voluptate similique. Adipisci reiciendis dolorem, inventore
                    eveniet perferendis totam impedit ratione nostrum, cumque
                    modi numquam. Optio, praesentium nulla? Laudantium delectus
                    assumenda magnam culpa ea? Deleniti corrupti dolorem iusto
                    accusamus reprehenderit culpa recusandae, veritatis pariatur
                    quos porro! Ea temporibus expedita asperiores ut nihil
                    explicabo laborum eligendi, quibusdam sapiente animi
                    reiciendis, sequi tempore accusantium quis nesciunt! Eius
                    facilis provident ex, cupiditate natus explicabo officia ab
                    temporibus veritatis neque ipsum voluptatibus quidem earum
                    incidunt ratione atque voluptas laudantium cumque repellat
                    fugiat esse. Eos et magni in, aut nemo doloremque optio hic
                    minus, laborum alias laudantium placeat, quos quas sit
                    ratione temporibus? Ratione sint beatae aspernatur nesciunt
                    dolorem magni non quasi soluta nulla alias ab quia adipisci
                    illo rem debitis libero, sit obcaecati nihil eligendi
                    quisquam at enim est. Fugiat aliquam beatae sapiente nam
                    explicabo placeat optio culpa, labore nihil ducimus tenetur
                    itaque ipsam perferendis autem in saepe, sequi omnis
                    temporibus repellat odit quia, iusto ad? Veniam modi
                    voluptatibus nihil? Dicta, libero! Pariatur facere omnis
                    cupiditate placeat eveniet eligendi quasi totam distinctio
                    cum voluptas? Non error molestiae voluptatum autem debitis.
                    Id ad similique nulla recusandae temporibus quisquam
                    blanditiis ut obcaecati optio veritatis quibusdam,
                    perferendis atque rem exercitationem earum ipsum numquam
                    labore pariatur iste porro doloribus! Pariatur, voluptatum.
                    Temporibus vero impedit molestiae praesentium quam quibusdam
                    qui voluptate velit. Atque, pariatur voluptatem fugit natus
                    quae, aperiam nihil, impedit tempore in ea ipsam voluptas
                    recusandae. Consequuntur voluptatibus neque quae unde minus
                    obcaecati, optio inventore iure. Atque iusto excepturi
                    dolorem optio fugit non rem quam sunt repudiandae, cum
                    aspernatur alias nemo corrupti ipsa sint iste doloribus
                    fugiat facere adipisci reiciendis aut obcaecati deleniti
                    autem. Optio dolores delectus sit officiis maxime
                    praesentium alias corporis sapiente. Perspiciatis tempora
                    esse molestiae eius. Molestiae mollitia atque ab beatae unde
                    quis dignissimos natus blanditiis excepturi qui expedita
                    autem dolor aspernatur dolorem, ratione corporis non
                    quibusdam nihil dolores porro quisquam id eum! Sint,
                    praesentium!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
