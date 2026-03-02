import GuestLayout from '@/Components/GuestLayout';
export default function Terms() {
  const sections = [{
    id: 'acceptance',
    title: t('1. Acceptance of Terms')
  }, {
    id: 'service',
    title: t('2. Description of Service')
  }, {
    id: 'accounts',
    title: t('3. User Accounts')
  }, {
    id: 'usage',
    title: t('4. Acceptable Use')
  }, {
    id: 'data',
    title: t('5. Vendor Data & Responsibility')
  }, {
    id: 'payment',
    title: t('6. Payment Terms')
  }, {
    id: 'ip',
    title: t('7. Intellectual Property')
  }, {
    id: 'liability',
    title: t('8. Limitation of Liability')
  }, {
    id: 'termination',
    title: t('9. Termination')
  }, {
    id: 'governing',
    title: t('10. Governing Law')
  }];
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <GuestLayout title={t('Terms of Service - VendorFlow')}>
            <div className="bg-(--color-bg-primary) min-h-screen">
                {/* Header */}
                <div className="bg-(--color-bg-secondary) border-b border-(--color-border-secondary)">
                    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-(--color-bg-primary) border border-(--color-border-primary) text-(--color-brand-primary) text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
                                {t('Effective Date: January 15, 2026')}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-(--color-text-primary) mb-6 tracking-tight">
                                {t('Terms of Service')}
                            </h1>
                            <p className="text-xl text-(--color-text-tertiary) leading-relaxed">
                                {t('Please read these terms carefully. They state the rules for using\n                                VendorFlow for your business.')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sidebar Navigation */}
                        <div className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-8 space-y-1">
                                <h3 className="text-xs font-bold text-(--color-text-muted) uppercase tracking-wider mb-4 px-3">
                                    {t('Contents')}
                                </h3>
                                {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className="block w-full text-left px-3 py-2 text-sm font-medium text-(--color-text-tertiary) hover:text-(--color-brand-primary) hover:bg-(--color-bg-hover) rounded-lg transition-colors border-l-2 border-transparent hover:border-(--color-brand-primary-light) truncate">
                                        {section.title}
                                    </button>)}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-9">
                            <div className="prose prose-lg prose-indigo max-w-none prose-li:my-3 prose-p:leading-loose prose-p:text-(--color-text-tertiary) prose-headings:mb-6 prose-headings:text-(--color-text-primary) prose-li:text-(--color-text-tertiary)">
                                <p className="lead text-(--color-text-tertiary)">
                                    {t('By accessing or using our platform, you agree to be bound by\n                                    these Terms and our Privacy Policy. If you do not agree to these\n                                    Terms, you may not access or use our services.')}
                                </p>

                                <hr className="my-12 border-(--color-border-secondary)" />

                                <section id="acceptance" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('1. Acceptance of Terms')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('By accessing and using VendorFlow, you acknowledge that you\n                                        have read, understood, and agree to be bound by these Terms\n                                        and our Privacy Policy. These Terms apply to all visitors,\n                                        users, and others who access or use the Service.')}
                                    </p>
                                </section>
                                <br />

                                <section id="service" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('2. Description of Service')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('VendorFlow is a comprehensive vendor management platform\n                                        that enables businesses to streamline vendor onboarding,\n                                        verify documents, track compliance, and process payments. We\n                                        assume no responsibility for any interactions between\n                                        vendors and businesses outside the scope of our platform\'s\n                                        functionality.')}
                                    </p>
                                </section>
                                <br />

                                <section id="accounts" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('3. User Accounts')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('When you create an account with us, you must provide us\n                                        information that is accurate, complete, and current at all\n                                        times. Failure to do so constitutes a breach of the Terms,\n                                        which may result in immediate termination of your account on\n                                        our Service.')}
                                    </p>
                                    <div className="bg-(--color-brand-primary-light) p-6 rounded-xl border border-(--color-brand-primary-light) my-6 not-prose">
                                        <h4 className="font-bold text-(--color-brand-primary-dark) mb-2 text-sm uppercase">
                                            {t('You are responsible for:')}
                                        </h4>
                                        <ul className="list-disc pl-4 space-y-2 text-sm text-(--color-brand-primary-dark)">
                                            <li>
                                                {t('Safeguarding the password that you use to access the\n                                                Service.')}
                                            </li>
                                            <li>{t('Any activities or actions under your password.')}</li>
                                            <li>
                                                {t('Notifying us immediately upon becoming aware of any\n                                                breach of security.')}
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <br />

                                <section id="usage" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('4. Acceptable Use')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-1">
                                        {t('You agree not to use the Service in any way that violates\n                                        any applicable national or international law or regulation.\n                                        Additionally, you agree not to:')}
                                    </p>
                                    <ul className="space-y-2 text-sm text-(--color-text-tertiary) mb-0">
                                        <li>
                                            {t('Upload irrelevant, obscene, defamatory, or unlawful\n                                            content.')}
                                        </li>
                                        <li>
                                            {t('Attempt to gain unauthorized access to, interfere with,\n                                            damage, or disrupt any parts of the Service.')}
                                        </li>
                                        <li>
                                            {t('Use any robot, spider, or other automatic device to\n                                            access the Service for any purpose.')}
                                        </li>
                                        <li>
                                            {t('Introduce any viruses, trojan horses, worms, logic\n                                            bombs, or other material that is malicious.')}
                                        </li>
                                    </ul>
                                </section>
                                <br />

                                <section id="data" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('5. Vendor Data & Responsibility')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('You retain all rights to the data you upload to VendorFlow.\n                                        By uploading data, you grant us a license to use, store, and\n                                        display that data solely for the purpose of providing the\n                                        service to you.')}
                                    </p>
                                    <p className="text-sm text-(--color-text-tertiary) mt-2 mb-0">
                                        {t('We take data accuracy seriously, but you are ultimately\n                                        responsible for verifying the authenticity of the documents\n                                        and information provided by vendors or businesses on our\n                                        platform.')}
                                    </p>
                                </section>
                                <br />

                                <section id="payment" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('6. Payment Terms')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('Certain aspects of the Service may be provided for a fee or\n                                        other charge. If you elect to use paid aspects of the\n                                        Service, you agree to the pricing and payment terms as we\n                                        may update them from time to time.')}
                                    </p>
                                </section>
                                <br />

                                <section id="ip" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('7. Intellectual Property')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('The Service and its original content (excluding Content\n                                        provided by users), features, and functionality are and will\n                                        remain the exclusive property of VendorFlow Technologies and\n                                        its licensors.')}
                                    </p>
                                </section>
                                <br />

                                <section id="liability" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('8. Limitation of Liability')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('In no event shall VendorFlow, nor its directors, employees,\n                                        partners, agents, suppliers, or affiliates, be liable for\n                                        any indirect, incidental, special, consequential or punitive\n                                        damages, including without limitation, loss of profits,\n                                        data, use, goodwill, or other intangible losses, resulting\n                                        from your access to or use of or inability to access or use\n                                        the Service.')}
                                    </p>
                                </section>
                                <br />

                                <section id="termination" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('9. Termination')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('We may terminate or suspend your account immediately,\n                                        without prior notice or liability, for any reason\n                                        whatsoever, including without limitation if you breach the\n                                        Terms. Upon termination, your right to use the Service will\n                                        immediately cease.')}
                                    </p>
                                </section>
                                <br />

                                <section id="governing" className="scroll-mt-24">
                                    <h3 className="font-bold text-(--color-text-primary) mb-2">
                                        {t('10. Governing Law')}
                                    </h3>
                                    <p className="text-sm text-(--color-text-tertiary) mb-0">
                                        {t('These Terms shall be governed and construed in accordance\n                                        with the laws of Karnataka, India, without regard to its\n                                        conflict of law provisions. Our failure to enforce any right\n                                        or provision of these Terms will not be considered a waiver\n                                        of those rights.')}
                                    </p>
                                </section>

                                <section id="contact" className="scroll-mt-24">
                                    <div className="bg-(--color-bg-secondary) border border-(--color-border-primary) rounded-2xl p-8 lg:p-10 not-prose mt-12">
                                        <h3 className="text-xl font-bold mb-4 text-(--color-text-primary)">
                                            {t('Legal Contact')}
                                        </h3>
                                        <p className="text-(--color-text-tertiary) mb-6">
                                            {t('For any questions regarding these Terms, please contact\n                                            our legal team.')}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6">
                                            <div>
                                                <div className="text-xs font-bold text-(--color-text-muted) uppercase tracking-wider mb-1">
                                                    {t('Email')}
                                                </div>
                                                <a href="mailto:legal@vendorflow.com" className="text-(--color-brand-primary) hover:text-(--color-brand-primary-hover) font-medium">
                                                    legal@vendorflow.com
                                                </a>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-(--color-text-muted) uppercase tracking-wider mb-1">
                                                    {t('Office')}
                                                </div>
                                                <div className="text-(--color-text-primary)">
                                                    {t('Bangalore, Karnataka, India')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>;
}