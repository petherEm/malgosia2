import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import Image from 'next/image'

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Helping companies generate revenue.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Automotive Industry Business Leader with 20+ Years of Proven Success in
        International Markets.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">About me</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            With extensive experience in the automotive industry, I effectively
            apply strategic planning, financial expertise, and leadership
            capabilities to drive success in the commercial truck rental sector.
            My strengths in identifying growth opportunities, optimizing
            operations, and cultivating a high-performance culture make me an
            ideal candidate for the role of General Manager.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            My proven ability to optimize operations, foster growth, and deliver
            measurable results ensures consistent business performance and
            market competitiveness.
          </p>
        </div>
        <div className="pt-4 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="relative h-[700px] w-[400px] overflow-hidden rounded-xl">
              <Image
                alt=""
                src="/profile/profile2-removebg.png"
                fill
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Stats</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years of Experience</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={20} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
                Completed Strategic Projects
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={15} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Europe Markets</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={4} />
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <Image
        alt=""
        src={img}
        className="size-12 rounded-full"
        width={50}
        height={50}
      />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Education() {
  return (
    <Container className="mb-12 mt-32">
      <Subheading>Education</Subheading>
      <Heading as="h3" className="mt-2">
        Comprehensive Academic Foundation in Business Administration and
        International Finance with a Global, Research-Driven Perspective
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Master of Business Administration from University of Denver and Warsaw
        University of Management & Law, complemented by a MSc in Business
        Administration and MSc in International Finance from Warsaw School of
        Economics (SGH).
      </Lead>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1"
      >
        <Person
          name="Master of Business Administration"
          description="University of Denver & University of Management and Law in Warsaw"
          img="/logo-cloud/UOD.jpeg"
        />
        <Person
          name="Master Degree in Business Management"
          description="University of Denver & University of Management and Law in Warsaw"
          img="/logo-cloud/UOD.jpeg"
        />
        <Person
          name="Master Degree in International Finance"
          description="Warsaw School of Economics"
          img="/logo-cloud/SGH.png"
        />
      </ul>
      <Subheading as="h3" className="mt-24">
        Languages
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
      >
        <Person
          name="English"
          description="C2/Proficient"
          img="/logo-cloud/UK.png"
        />
        <Person
          name="Italian"
          description="B2/Upper Intermediate"
          img="/logo-cloud/IT.png"
        />
        <Person
          name="Russian"
          description="B1/Intermediate"
          img="/logo-cloud/RU.png"
        />
        <Person name="Polish" description="Native" img="/logo-cloud/PL.png" />
      </ul>
    </Container>
  )
}

function Expertise() {
  return (
    <Container className="mb-14 mt-32">
      <Subheading>Expertise</Subheading>
      <Heading as="h3" className="mt-2">
        Driving Growth and Operational Excellence through Strategic Leadership
        in the Automotive Industry.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        With over 20 years of experience in the automotive industry, I have
        honed a diverse skill set that spans financial management, strategic
        planning, and operational leadership. Below are key areas of expertise
        that have consistently contributed to my professional achievements.
      </Lead>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <h1 className="">Business Operations & Financial Management</h1>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Extensive experience in overseeing business operations, analyzing
            corporate finances, and conducting in-depth financial assessments to
            evaluate partner viability.
          </p>
        </li>
        <li>
          <h1 className="">Strategic Planning & Project Management</h1>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Demonstrated success in strategic sales planning, brand positioning,
            and alliance-building to secure multimillion-euro contracts and
            partnerships.
          </p>
        </li>
        <li>
          <h1 className="">Risk Analysis & Mitigation</h1>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Proven expertise in identifying, assessing, and mitigating financial
            and operational risks, with a focus on expenditure control and
            sustainability.
          </p>
        </li>
        <li>
          <h1 className="">Leadership & Team Building</h1>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Effective and motivational leader with a collaborative approach,
            consistently driving teams to surpass performance goals.
          </p>
        </li>
        <li>
          <h1 className="">Automotive Distribution & Sales Channels</h1>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Skilled in managing end-to-end automotive distribution models,
            including sales network development, customer financing, and channel
            optimization.
          </p>
        </li>
      </ul>
    </Container>
  )
}

function Careers() {
  return (
    <Container id="resume" className="my-8 md:my-28">
      <Subheading>Experience</Subheading>
      <Heading as="h3" className="mt-2">
        Proven-track record of outstanding results.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        I have strong acumen in financial planning and analysis, business
        development, and sales channel optimization across international
        markets.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-1">
        <div className="lg:max-w-6xl">
          <Subheading as="h3">Career path</Subheading>
          <div>
            <table className="mt-6 w-full text-left">
              <colgroup>
                <col className="w-[80%]" />
              </colgroup>
              <thead className="">
                {/* <tr>
                  <th scope="col">Positions</th>
                </tr> */}
              </thead>
              <tbody>
                {/* <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Strategy | Business Growth | Finance
                    </div>
                  </th>
                </tr> */}
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4 text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-xl">
                        IVECO Group - Turin, Italy
                      </span>
                      <span className="mb-3 font-normal">2022 - Present</span>{' '}
                      <span className="font-bold">
                        Corporate FP&A Senior Manager
                      </span>{' '}
                      <p className="">
                        Provided financial support to executive management and
                        the Board, delivering key analyses, reporting, and
                        forecasts for corporate functions and business units.
                        Led corporate consolidation and budgeting processes,
                        implemented critical BI dashboards for enhanced
                        financial visibility, and drove initiatives to
                        streamline financial processes and improve business
                        agility.
                      </p>
                    </div>
                  </td>
                  <td className="px-0 py-4"></td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4 text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-xl">
                        CNH Industrial SpA - Turin, Italy
                      </span>
                      <span className="mb-3 font-normal">2021 - 2022</span>{' '}
                      <span className="font-bold">
                        Global Strategy, PMO Spin-off Global
                      </span>{' '}
                      <p className="">
                        Supported the Chief Separation Officer in the spin-off
                        of CNH Industrial&apos;s On-Highway business, focusing
                        on optimizing cost structures and aligning investment
                        priorities for CNH Industrial and Iveco Group. Conducted
                        market intelligence, M&A assessments, and executed
                        strategic transactions, including divestitures and joint
                        ventures, to drive growth in commercial vehicles,
                        special vehicles, and powertrain sectors.
                      </p>
                    </div>
                  </td>
                  <td className="px-0 py-4"></td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4 text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-xl">
                        CNH Industrial SpA IVECO Brand, Turin (IT), Lyon (FR)
                      </span>
                      <span className="mb-3 font-normal">2019 - 2021</span>{' '}
                      <span className="font-bold">
                        Global Bus Business & Network Development Director
                      </span>{' '}
                      <p className="">
                        Directed project teams to optimize resource management
                        and distribution models, strengthening the network chain
                        for timely project delivery. Managed global bus business
                        operations, including network development, product
                        innovation, and talent recruitment to drive growth and
                        market share. Led dealer and sales teams, fostering a
                        customer-centric approach and ensuring business success
                        through strategic consultation and team development.
                      </p>
                    </div>
                  </td>
                  <td className="px-0 py-4"></td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4 text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-xl">
                        CNH Industrial SpA - IVECO Poland, Warsaw
                      </span>
                      <span className="mb-3 font-normal">2012 - 2019</span>{' '}
                      <span className="font-bold">
                        Business Network Development Director, Poland & Ukraine
                      </span>{' '}
                      <p className="">
                        Gained a competitive edge by analyzing market trends and
                        competitors, while ensuring adherence to BER guidelines
                        and IVECO&apos;s principles. Led the transformation of
                        the distribution network, surpassing sales expectations,
                        and successfully acquired 12 new partners in Poland and
                        Ukraine. Developed a high-performing workforce by
                        recruiting top talent and executing motivational
                        programs within the dealer network.
                      </p>
                    </div>
                  </td>
                  <td className="px-0 py-4"></td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4 text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-xl">
                        CNH Industrial SpA - IVECO Poland, Warsaw
                      </span>
                      <span className="mb-3 font-normal">2008 - 2012</span>{' '}
                      <span className="font-bold">
                        Treasury & Credit Control Manager, Head of Commercial
                        Lending
                      </span>{' '}
                      <p className="">
                        Achieved financial objectives by managing cash flow,
                        forecasting, credit operations, and debt recovery.
                        Successfully navigated the 2008-2009 financial crisis by
                        renegotiating loans, restructuring assets, and
                        collaborating with banks and legal offices. Implemented
                        dealer stock financing through the &apos;Floor
                        Plan&apos; with CNH Capital, enhancing operations, and
                        overseeing retail financing and sales initiatives.
                      </p>
                    </div>
                  </td>
                  <td className="px-0 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function AboutMe() {
  return (
    <section id="about" className="overflow-hidden">
      <Header />
      <Careers />
      <Expertise />
      <Education />
    </section>
  )
}
