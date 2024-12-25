import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermsSection from '../components/terms/TermsSection';
import OrderedList from '../components/terms/OrderedList';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Terms and Conditions | Derbyshire Removals</title>
        <meta name="description" content="Read our comprehensive terms and conditions for removal services, storage solutions, and business operations at Derbyshire Removals." />
        <meta name="keywords" content="removal terms, storage conditions, business terms, Derbyshire Removals terms" />
        <link rel="canonical" href="https://derbyshireremovals.com/#/terms-and-conditions" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "description": "Comprehensive terms and conditions for removal services and storage solutions",
            "publisher": {
              "@type": "Organization",
              "name": "Derbyshire Removals"
            }
          })}
        </script>
      </Helmet>

      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">CONDITIONS OF BUSINESS</h1>
        <p className="mb-6">We handle, remove and care for your property only under these Conditions of Business. In these conditions: we, our and us refer to Derbyshire Removals: you means the customer or the customer's agents.</p>
        
        <div className="space-y-8">
          <TermsSection title="1. ESTIMATES">
            <p className="mb-3">We may amend our estimate and you agree to pay any extra amount if:</p>
            <OrderedList items={[
              'extra work is done or extra goods are handled or dealt with;',
              'goods are to be collected from or delivered to premises above a second floor unless previously agreed in writing;',
              'during the work we supply extra services or work on Saturday, Sunday or general holiday, at your request;',
              'when we collect or deliver the goods the work cannot be done conveniently by means of adequate staircases, lifts, doorways, or there is no suitable road and approach for our vehicle unless you have given adequate notice in writing;',
              'at our discretion we have to use window or other tackle. The use of such equipment shall be at your risk and expense;',
              'costs are altered by any circumstances or delay beyond our control;',
              'you do not accept the estimate within 21 days.'
            ]} />
          </TermsSection>

          <TermsSection title="2. WORK NOT INCLUDED">
            <p>Unless we have agreed differently in writing our estimate does not include taking down or putting up unit furniture, fitments and fixtures, disconnecting and reconnecting appliances and fittings, laying fitted floor coverings, moving deep freezers loaded with goods or moving night storage heaters not dismantled or any other items we specifically exclude in writing. If any of our employees does such work at your request without our prior agreement we shall not be liable for any loss or damage occurring whatever the cause. But the rest of these conditions shall still apply to such work.</p>
          </TermsSection>

          <TermsSection title="3. PAYMENT">
            <p>Unless we have agreed differently in writing, our charges shall be payable; Four weeks in advance for rental and other charges for goods stored.</p>
          </TermsSection>

          <TermsSection title="4. DECLARATION OF OWNERSHIP">
            <p>By signing this Contract you declare that the property to be handled is either your own property free of any legal charge or burden on it or that you have the complete authority of anyone owning or having a legal interest in it to enter into this contract on their behalf. You agree to cover us fully against any claims, charges, costs and demands made against us arising from any claim to the goods by anyone else.</p>
          </TermsSection>

          <TermsSection title="5. YOUR RESPONSIBILITIES">
            <p className="mb-3">You agree:</p>
            <OrderedList items={[
              'to be present or represented during the removal to ensure that nothing that should be removed is left behind and that no goods are taken away in error, or to provide in advance a list of all items to be removed.',
              'to arrange proper protection for goods left in unoccupied or unattended premises or where other people such as tenants or workmen are present. If such protection is not properly arranged we shall not be liable for damage or loss however caused.',
              'not to offer for removal or storage, jewellery, watches, trinkets, precious stones, money, deeds, securities, stamps and coins (or similar collections of any kind) or livestock.',
              'not to offer for removal, packing or warehousing any article or substance which is dangerous, damaging or explosive, nor to offer for warehousing any article or substance including food or anything likely to encourage vermin or other pests or likely to cause infection. You will cover us fully against any claims made and for any loss or damage that we or someone else may suffer through the presence of any such article or substance among goods. If such article or substance is discovered we may remove, self destroy or other dispose of it.',
              'to pay or repay to us any parking or meter suspension charges we may have to pay during any work for you.',
              'pay any toll/road/bridge charges that are incurred during the removal.'
            ]} />
          </TermsSection>

          <TermsSection title="6. CANCELLING THE REMOVAL">
            <p className="mb-3">If you cancel the work we shall be entitled to make the following charges:</p>
            <OrderedList items={[
              'for cancellation or postponement 11 working days or more before the start of the work – no charge.',
              '8 to 10 working days – 25% of the removal charge.',
              '7 working days or less – 50% of the removal charge.'
            ]} />
          </TermsSection>

          <TermsSection title="7. ROUTE AND METHOD">
            <p className="mb-3">You agree that we may:</p>
            <OrderedList items={[
              'at any time interchange the goods between vehicles and warehouses and may also decide what route or by what means the goods shall be carried or stored',
              'enter into any contract with any other business to carry out the whole or any part of this contract or to cause any of the property to be stored by any other business. All these conditions shall apply to such a sub-contractor.'
            ]} />
          </TermsSection>

          <TermsSection title="8. LIMITS OF OUR LIABILITY">
            <p className="mb-3">If we are liable for any loss, failure to produce or damages we will pay only:</p>
            <OrderedList items={[
              'the cost of repairing or replacing the damaged or missing article, or up to £20 for any one article, suite, service or complete case or package or other container and their contents whichever is the smaller amount. We shall choose whether to repair or replace any damaged or missing article if we repair no claim can be made against us for depreciation.'
            ]} />
          </TermsSection>

          <TermsSection title="9. OTHER LIABILITIES">
            <p className="mb-3">We shall not be liable at all for any loss, failure to produce or damage however caused.</p>
            <OrderedList items={[
              'by fire save that should we receive your written instructions and a declaration value three clear days before the removal starts we will arrange insurance against the risk in your name and for your account;',
              'by war, war invasion, acts of foreign enemies, hostilities (whether war is declared or not), civil war, rebellion, insurrection or military coup, wear and tear or graded deterioration, leakage or deficiency of articles of a perishable or leaky nature, acts of God, consequential loss or circumstances beyond our control;',
              'by vermin, moth or other infestations;',
              'arising from any process of cleaning, repairing or restoring of the goods unless such work was carried out by us in which case our liability is limited as in clause 8;',
              'to any articles in wardrobes or drawers or in ay package, bundle, case or any other container not both packed and unpacked by our employees. If goods are only packed and dispatched by us no claim shall be made against us after the goods leave our hands for any loss or damage however caused.',
              'for jewellery, watches, trinkets, precious stones, money, deeds, securities, stamps, coins or similar collections of any kind, nor livestock, plants or animals;',
              'if goods are removed from or delivered to unattended or unoccupied premises or where third parties present (see clause 5b);',
              'if goods are proved to be brittle or to have any inherent defect or to suffer from any inherent vice.'
            ]} />
          </TermsSection>

          <TermsSection title="10. DEEP FREEZE">
            <p>We shall not be liable for:</p>
            <OrderedList items={[
              'damage to any deep freeze in which goods are packed however caused',
              'loss or damage to the contents of any deep freezer however caused',
              'for death, injury, sickness or disease to any person arising from the removal or warehousing of any deep freezer in which goods are packed',
              'If any goods are moved/removed at your request by yourself or third parties.'
            ]} />
          </TermsSection>

          <TermsSection title="11. SELF ASSEMBLY KIT FURNITURE">
            <p>We shall not be liable for any damage to or reduction in quality of any furniture which is unsuitable for removal or carriage (particularly system furniture sold in the form of dismantled kits). Having dismantled such furniture at your instruction, we will not be responsible for the quality or state of that furniture upon re-assembling either by us or by you not for any damage to the furniture during dismantling or re-assembling.</p>
          </TermsSection>

          <TermsSection title="12. TIME LIMITS FOR OTHER CLAIMS">
            <p className="mb-3">You must notify us in writing of loss or damage within the time stated below, otherwise we will not be liable, the time limits are essential;</p>
            <OrderedList items={[
              'for goods removed from our warehouse by anyone except us – at the time the goods are removed',
              'in other cases for goods alleged to be damaged – within 7 days after the delivery of the goods',
              'in the case of goods alleged to be lost or which we fail to produce – within 7 days after the goods should normally have been delivered alone or with other goods'
            ]} />
          </TermsSection>

          <TermsSection title="13. PAYMENT OF OTHER CONTRACTORS">
            <p>We must pay all charges claimed by any previous removal/storage contractor, carrier or freight forwarder and any other charges, duties or levies raised upon the goods. You agree to repay to us such charges, duties or levies.</p>
          </TermsSection>

          <TermsSection title="14. IF OUR CHARGES ARE NOT PAID">
            <p>If our charges are not paid (see clause 3) we may take all or any part of the goods in our hands to store or keep them in store and we shall be entitled to charge for warehousing them and for any expenses in connection with taking them to store and removal from store. All these conditions shall continue to apply to them.</p>
          </TermsSection>

          <TermsSection title="15. LIEN">
            <p className="mb-3">("Lien" means the right to keep possession for someone else property until a debt is paid)</p>
            <OrderedList items={[
              <span><strong>General Lien</strong> We shall have a general lien upon all goods in our possession for all money you owe us or for liabilities incurred by us and for payments we make on your behalf. If part of the goods have been delivered, removed, dispatched or sold, the general lien shall apply to any goods that remain in our possession. We shall be entitled to charge warehouse rent and all other expenses while we maintain a lien on the goods. All these conditions shall continue to apply to them.</span>,
              <span><strong>Particular Lien</strong> We shall have a particular lien until money due on those goods is paid and the same condition as in 15a shall apply.</span>
            ]} />
          </TermsSection>

          <TermsSection title="16. END OF AGREEMENT/POWER OF SALE">
            <p>We may at any time give you 30 days written notice requiring you to remove all goods from our care, custody or control and to pay all debts then due. If you do not remove the goods we shall have the power to sell or otherwise dispose of all or part of them without further notice. We may put the proceeds of the sale towards payment of all debts and any expense incurred by the sale or disposal. Any surplus will be paid to you without interest.</p>
          </TermsSection>

          <TermsSection title="17. STORAGE ADDITIONAL CONDITIONS">
            <OrderedList items={[
              <span><strong>Registered Address:</strong> you must provide an address to which all communications are to be directed and shall notify us in writing of any change. All communications to you will be treated as having been duly served and received 3 days after posting.</span>,
              <span><strong>Inventory</strong> if we provide an inventory or receipt for the goods it need not state the contents of any article, suite, case, bundle, package or other container. The inventory or receipt shall be final except for any specific item which you point out in writing within 7 days of receiving the inventory. No claim may be made in respect of any item not described in the inventory or receipt</span>,
              <span><strong>Revision of your storage charges</strong> Storage charges are subject to revision each year and you agree to pay any increased charge which may result from the revision.</span>,
              <span><strong>Termination by us</strong> If payments due are not in arrears we may only end this agreement by giving 30 days notice.</span>,
              <span><strong>Termination by you</strong> You must give at least 14 clear working days notice in writing. If we are able to agree to release the goods earlier, the storage charges may still be payable to the date when the notice would have ended.</span>,
              'The minimum period for storage shall be one week',
              'Storage Insurance covers all risks up to the value insured excluding jewellery, watches, trinkets, precious stones, money, deeds, securities, stamps and coins or similar collections of any kind of barometers and livestock.'
            ]} />
          </TermsSection>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
