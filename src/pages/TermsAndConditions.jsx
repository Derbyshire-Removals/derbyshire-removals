import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">CONDITIONS OF BUSINESS</h1>
        <p className="mb-6">We handle, remove and care for your property only under these Conditions of Business. In these conditions: we, our and us refer to Derbyshire Removals: you means the customer or the customer's agents.</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. ESTIMATES</h2>
            <p className="mb-3">We may amend our estimate and you agree to pay any extra amount if:</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>extra work is done or extra goods are handled or dealt with; or</li>
              <li>goods are to be collected from or delivered to premises above a second floor unless previously agreed in writing; or</li>
              <li>during the work we supply extra services or work on Saturday, Sunday or general holiday, at your request; or</li>
              <li>when we collect or deliver the goods the work cannot be done conveniently by means of adequate staircases, lifts, doorways, or there is no suitable road and approach for our vehicle unless you have given adequate notice in writing; or</li>
              <li>at our discretion we have to use window or other tackle. The use of such equipment shall be at your risk and expense; or</li>
              <li>costs are altered by any circumstances or delay beyond our control; or</li>
              <li>you do not accept the estimate within 21 days.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. WORK NOT INCLUDED</h2>
            <p>Unless we have agreed differently in writing our estimate does not include taking down or putting up unit furniture, fitments and fixtures, disconnecting and reconnecting appliances and fittings, laying fitted floor coverings, moving deep freezers loaded with goods or moving night storage heaters not dismantled or any other items we specifically exclude in writing. If any of our employees does such work at your request without our prior agreement we shall not be liable for any loss or damage occurring whatever the cause. But the rest of these conditions shall still apply to such work.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. PAYMENT</h2>
            <p>Unless we have agreed differently in writing, our charges shall be payable; Four weeks in advance for rental and other charges for goods stored.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. DECLARATION OF OWNERSHIP</h2>
            <p>By signing this Contract you declare that the property to be handled is either your own property free of any legal charge or burden on it or that you have the complete authority of anyone owning or having a legal interest in it to enter into this contract on their behalf. You agree to cover us fully against any claims, charges, costs and demands made against us arising from any claim to the goods by anyone else.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. YOUR RESPONSIBILITIES</h2>
            <p className="mb-3">You agree:</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>to be present or represented during the removal to ensure that nothing that should be removed is left behind and that no goods are taken away in error, or to provide in advance a list of all items to be removed.</li>
              <li>to arrange proper protection for goods left in unoccupied or unattended premises or where other people such as tenants or workmen are present. If such protection is not properly arranged we shall not be liable for damage or loss however caused.</li>
              <li>not to offer for removal or storage, jewellery, watches, trinkets, precious stones, money, deeds, securities, stamps and coins (or similar collections of any kind) or livestock.</li>
              <li>not to offer for removal, packing or warehousing any article or substance which is dangerous, damaging or explosive, nor to offer for warehousing any article or substance including food or anything likely to encourage vermin or other pests or likely to cause infection. You will cover us fully against any claims made and for any loss or damage that we or someone else may suffer through the presence of any such article or substance among goods. If such article or substance is discovered we may remove, self destroy or other dispose of it.</li>
              <li>to pay or repay to us any parking or meter suspension charges we may have to pay during any work for you.</li>
              <li>pay any toll/road/bridge charges that are incurred during the removal.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. CANCELLING THE REMOVAL</h2>
            <p className="mb-3">If you cancel the work we shall be entitled to make the following charges:</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>for cancellation or postponement 11 working days or more before the start of the work – no charge.</li>
              <li>8 to 10 working days – 25% of the removal charge.</li>
              <li>7 working days or less – 50% of the removal charge.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. ROUTE AND METHOD</h2>
            <p className="mb-3">You agree that we may:</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>at any time interchange the goods between vehicles and warehouses and may also decide what route or by what means the goods shall be carried or stored</li>
              <li>enter into any contract with any other business to carry out the whole or any part of this contract or to cause any of the property to be stored by any other business. All these conditions shall apply to such a sub-contractor.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. LIMITS OF OUR LIABILITY</h2>
            <p className="mb-3">If we are liable for any loss, failure to produce or damages we will pay only:</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>the cost of repairing or replacing the damaged or missing article, or up to £20 for any one article, suite, service or complete case or package or other container and their contents whichever is the smaller amount. We shall choose whether to repair or replace any damaged or missing article if we repair no claim can be made against us for depreciation.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. OTHER LIABILITIES</h2>
            <p className="mb-3">We shall not be liable at all for any loss, failure to produce or damage however caused.</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>by fire save that should we receive your written instructions and a declaration value three clear days before the removal starts we will arrange insurance against the risk in your name and for your account;</li>
              <li>by war, war invasion, acts of foreign enemies, hostilities (whether war is declared or not), civil war, rebellion, insurrection or military coup, wear and tear or graded deterioration, leakage or deficiency of articles of a perishable or leaky nature, acts of God, consequential loss or circumstances beyond our control;</li>
              <li>by vermin, moth or other infestations;</li>
              <li>arising from any process of cleaning, repairing or restoring of the goods unless such work was carried out by us in which case our liability is limited as in clause 8;</li>
              <li>to any articles in wardrobes or drawers or in ay package, bundle, case or any other container not both packed and unpacked by our employees. If goods are only packed and dispatched by us no claim shall be made against us after the goods leave our hands for any loss or damage however caused.</li>
              <li>for jewellery, watches, trinkets, precious stones, money, deeds, securities, stamps, coins or similar collections of any kind, nor livestock, plants or animals;</li>
              <li>if goods are removed from or delivered to unattended or unoccupied premises or where third parties present (see clause 5b);</li>
              <li>if goods are proved to be brittle or to have any inherent defect or to suffer from any inherent vice.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. DEEP FREEZE</h2>
            <p>We shall not be liable for:</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>damage to any deep freeze in which goods are packed however caused</li>
              <li>loss or damage to the contents of any deep freezer however caused</li>
              <li>for death, injury, sickness or disease to any person arising from the removal or warehousing of any deep freezer in which goods are packed</li>
              <li>If any goods are moved/removed at your request by yourself or third parties.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. SELF ASSEMBLY KIT FURNITURE</h2>
            <p>We shall not be liable for any damage to or reduction in quality of any furniture which is unsuitable for removal or carriage (particularly system furniture sold in the form of dismantled kits). Having dismantled such furniture at your instruction, we will not be responsible for the quality or state of that furniture upon re-assembling either by us or by you not for any damage to the furniture during dismantling or re-assembling.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. TIME LIMITS FOR OTHER CLAIMS</h2>
            <p className="mb-3">You must notify us in writing of loss or damage within the time stated below, otherwise we will not be liable, the time limits are essential;</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>for goods removed from our warehouse by anyone except us – at the time the goods are removed</li>
              <li>in other cases for goods alleged to be damaged – within 7 days after the delivery of the goods</li>
              <li>in the case of goods alleged to be lost or which we fail to produce – within 7 days after the goods should normally have been delivered alone or with other goods</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">13. PAYMENT OF OTHER CONTRACTORS</h2>
            <p>We must pay all charges claimed by any previous removal/storage contractor, carrier or freight forwarder and any other charges, duties or levies raised upon the goods. You agree to repay to us such charges, duties or levies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">14. IF OUR CHARGES ARE NOT PAID</h2>
            <p>If our charges are not paid (see clause 3) we may take all or any part of the goods in our hands to store or keep them in store and we shall be entitled to charge for warehousing them and for any expenses in connection with taking them to store and removal from store. All these conditions shall continue to apply to them.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">15. LIEN</h2>
            <p className="mb-3">("Lien" means the right to keep possession for someone else property until a debt is paid)</p>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>
                <p className="font-semibold">General Lien</p>
                <p>We shall have a general lien upon all goods in our possession for all money you owe us or for liabilities incurred by us and for payments we make on your behalf. If part of the goods have been delivered, removed, dispatched or sold, the general lien shall apply to any goods that remain in our possession.</p>
                <p>We shall be entitled to charge warehouse rent and all other expenses while we maintain a lien on the goods. All these conditions shall continue to apply to them.</p>
              </li>
              <li>
                <p className="font-semibold">Particular Lien</p>
                <p>We shall have a particular lien until money due on those goods is paid and the same condition as in 15a shall apply.</p>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">16. END OF AGREEMENT/POWER OF SALE</h2>
            <p>We may at any time give you 30 days written notice requiring you to remove all goods from our care, custody or control and to pay all debts then due. If you do not remove the goods we shall have the power to sell or otherwise dispose of all or part of them without further notice. We may put the proceeds of the sale towards payment of all debts and any expense incurred by the sale or disposal.</p>
            <p>Any surplus will be paid to you without interest.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">17. STORAGE ADDITIONAL CONDITIONS</h2>
            <ol className="list-[lower-alpha] pl-5 space-y-2">
              <li>
                <p className="font-semibold">Registered Address:</p>
                <p>you must provide an address to which all communications are to be directed and shall notify us in writing of any change. All communications to you will be treated as having been duly served and received 3 days after posting.</p>
                <p>*if sent by post to the registered address from which the last communication was received from you or</p>
                <p>*if there is no registered address, by publication in a public newspaper circulating in the area from which the goods were removed</p>
              </li>
              <li>
                <p className="font-semibold">Inventory</p>
                <p>if we provide an inventory or receipt for the goods it need not state the contents of any article, suite, case, bundle, package or other container. The inventory or receipt shall be final except for any specific item which you point out in writing within 7 days of receiving the inventory. No claim may be made in respect of any item not described in the inventory or receipt</p>
              </li>
              <li>
                <p className="font-semibold">Revision of your storage charges</p>
                <p>Storage charges are subject to revision each year and you agree to pay any increased charge which may result from the revision.</p>
              </li>
              <li>
                <p className="font-semibold">Termination by us</p>
                <p>If payments due are not in arrears we may only end this agreement by giving 30 days notice.</p>
              </li>
              <li>
                <p className="font-semibold">Termination by you</p>
                <p>You must give at least 14 clear working days notice in writing. If we are able to agree to release the goods earlier, the storage charges may still be payable to the date when the notice would have ended.</p>
              </li>
              <li>The minimum period for storage shall be one week</li>
              <li>Storage Insurance covers all risks up to the value insured excluding jewellery, watches, trinkets, precious stones, money, deeds, securities, stamps and coins or similar collections of any kind of barometers and livestock.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">18. THIS AGREEMENT</h2>
            <p>This agreement is treated as having been made at our office stated on this form. If it is in the United Kingdom or The Republic of Ireland, this agreement will be governed by English Law. None of our servants or agents has authority to alter or vary these conditions in any way.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;