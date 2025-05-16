
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Help = () => {
  return (
    <PageLayout title="Help & Support">
      <div className="mb-8">
        <Card className="bg-tariff-light border-none">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-tariff" />
              </div>
              <div>
                <h3 className="font-bold">Chat Support</h3>
                <p className="text-sm text-gray-600">Get instant help from our team</p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-tariff hover:bg-tariff-dark">
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-tariff" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Find answers to common questions about Tariff Shield
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full text-left">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How does Tariff Shield work?</AccordionTrigger>
                  <AccordionContent className="text-left">
                    Tariff Shield allows your customers to pay your company estimated tariffs during checkout.
                    Our app integrates directly into your Shopify checkout experience, giving customers
                    the option to add tariff protection. This helps you claim back some prepaid tariff costs
                    when shipping via entry type 11, without having to increase your product or shipping price.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How are tariff costs calculated?</AccordionTrigger>
                  <AccordionContent className="text-left">
                    You can set a fixed price for tariff protection or enable our auto-calculation
                    feature. With auto-calculation, tariffs are estimated based on the 'cost per item'
                    per each product in your shopify backend x 150% or which ever custom percentage you choose.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How can I pay for customers tariffs in advance?</AccordionTrigger>
                  <AccordionContent className="text-left">
                    When shipping from China to USA, you can change your shipping method to entry type 11
                    via the shipping act, each country has their own shipping act that will allow you to
                    ship into their country and pay duty, taxes or tariffs in advance. Have a meeting with
                    your shipper to find out more.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Are customers tariffs now prepaid?</AccordionTrigger>
                  <AccordionContent className="text-left">
                    Your shipping company will be in control of how your customers are charge. If you are
                    shipping directly to the USA via China, we advise shipping method entry type 11 under
                    the shipping act. Tariff guard helps you the business owner compensate from the additional
                    costs of tariffs, but we do not pay tariffs in advance for your customers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Email Us</CardTitle>
              <CardDescription>
                Have a question that's not covered in the FAQ? Send us a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your issue or question in detail..."
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-tariff hover:bg-tariff-dark">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Help;
