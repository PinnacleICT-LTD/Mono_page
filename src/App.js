import './App.css';
import {Button, Box, Link, Spacer, Text, HStack, Flex, Grid, Tab, Tabs, TabList, TabPanels, TabPanel, Image} from '@chakra-ui/react';
import Nigeria from './assets/nigeria.svg';
import Blue from './assets/blue.svg';
import Blue2 from './assets/blue2.svg';
import Twitter from './assets/twitter.svg';
import LinkedIn from './assets/linkedin.svg';
import {BsArrowRight, BsFillPlayFill} from 'react-icons/bs';
import {BiHeadphone} from 'react-icons/bi';
import Footer from './assets/footer.svg';
import Phone from './assets/landing-hero-phone.png';
import Laptop from './assets/landing-hero-laptop.png';
import Download from './assets/download.png';
import Flutterwave from './assets/flutterwave.svg';
import Carbon from './assets/carbon.svg';
import Check from './assets/check.svg';
import Renmoney from './assets/renmoney.png'
import Indicima from './assets/indicima.png';
import FinancialData from './assets/financial-data.svg';
import FinancialDataI from './assets/financial-data-i.svg';
import DirectDebit from './assets/direct-debit.svg';
import DirectDebitI from './assets/direct-debit-i.svg';
import StatementPages from './assets/statement-pages.svg';
import StatementPagesI from './assets/statement-pages-i.svg';
import Background from './assets/hero-blue.svg';
import Developers from './assets/developers.svg';

function App() {
  return (
    <Box>
      <Grid templateColumns="3fr" backgroundImage={Background} gap={6} pr="6.3rem" pl="6.3rem" pt="0rem" overflow="hidden" className="header">
        <HStack pt="0rem">
          <Image src={Blue} width="24" height="24" />
          <Spacer />

          <Grid templateColumns="repeat(5, 1fr)" gap={3}>
            <Link><Text color="white" fontWeight="bold">Products</Text></Link>
            <Link><Text color="white" fontWeight="bold">Use Cases</Text></Link>
            <Link><Text color="white" fontWeight="bold">Pricing</Text></Link>
            <Link><Text color="white" fontWeight="bold">Docs</Text></Link>
            <Link><Text color="white" fontWeight="bold">Company</Text></Link>
          </Grid>

          <Spacer />
          <HStack spacing={5}>
            <Image src={Nigeria} width="17" height="17" />
            <Button color="white" backgroundColor="blue">
              <HStack spacing={2}>
                <Text>Log In </Text>
                <BsArrowRight width="24" height="24" />
              </HStack>
            </Button>
          </HStack>
        </HStack>

        <Grid templateColumns="2fr 2fr" gap={8}>
          <Grid templateColumns="1fr" gap={4}>
            <Box>
              <Text color="white" fontSize="6xl" lineHeight="4rem">Access financial accounts across Africa with mono</Text>
            </Box>
            <Grid templateColumns="1fr" gap={5}>
              <Box>
                <Text color="white" fontSize="1xl">Mono helps digital businesses in Africa access their customer's financial account for data and payments</Text>
              </Box>
              <Box>
                <HStack spacing={4}>
                  <Button color="#182cd1" p="1.5rem 2rem" backgroundColor="hsla(0,0%,100%,.9)">
                    <HStack sapcing={2}>
                      <Text>Start now </Text>
                      <BsArrowRight width="30" height="30" />
                    </HStack>
                  </Button>
                  <Button color="white" p="1.5rem 2rem" backgroundColor="blue.600">
                    <HStack sapcing={2}>
                      <Text>Talk to sales team</Text>
                      <BiHeadphone />
                    </HStack>
                  </Button>
                </HStack>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Flex direction="row">
              <Image src={Phone} className="phone" />
              <Image src={Laptop} />
            </Flex>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Image src={Download} />
      </Box>

      <Box  p="5rem 13rem 3rem;">
        <Box pb="5rem">
          <Grid templateColumns="1fr">
            <Box mb="4rem"><Text color="#55586f">Trusted by businesses like</Text></Box>
            <Flex direction="row">
              <Link><Image src={Carbon} width="15" height="19.5"/></Link>
              <Spacer />
              <Link><Image src={Renmoney} width="15" height="19.5" /></Link>
              <Spacer />
              <Link><Image src={Indicima} width="15" height="19.5" /></Link>
              <Spacer />
              <Link><Image src={Flutterwave} width="15" height="19.5"/></Link>
            </Flex>
          </Grid>
        </Box>

        <Grid templateColumns="1fr 1fr">
            <Box>
              <Button color="#ffaf2c" mb="1rem" backgroundColor="rgba(255,175,44,.1)">
                Elevating financial innovation
              </Button>
              <Text color="black" fontSize="4xl">
                Plug-and-play technology through one API
              </Text>
            </Box>
          
            <Box>
              <Text fontSize="1rem" mb="1rem" lineHeight="2.8rem">Access a broad range of high-quality financial ddata from institutions across Africa through a single API. With Mono, you can provide new customer experiences.</Text>
              <Button color="white" mb="1rem" backgroundColor="#182cd1">
                <HStack>
                  <Text>See a demo</Text>
                  <BsArrowRight />
                </HStack>
              </Button>
            </Box>
        </Grid>

        <Grid templateColumns="1fr 1fr" mt="3rem">
          <Box>
            <Image src={FinancialData} width="8rem" height="8rem" mb="5rem" />
            <Text  pb="1.5rem" color="#050929" fontSize="3xl">Connect</Text>
            <Text pt="3rem">Mono connect allows access to financial data from your user's financial account. With Connect, you can get your customers transactions, real time balances, income etc.</Text>
            <Button color="white"  mt="3rem" backgroundColor="#182cd1">
              <HStack>
                <Text>Start with Financial Data</Text>
                <BsArrowRight />
              </HStack>
            </Button>
            <Box mt="3rem">
              <HStack spacing={6} mr="2rem" mb="1.5rem">
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Account Data</Text>
                </HStack>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Transaction History</Text>
                </HStack>
              </HStack>
              <HStack spacing={6}>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Balances</Text>
                </HStack>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Income Insights</Text>
                </HStack>
              </HStack>
            </Box>
          </Box>
          <Box mt="7rem">
            <Image src={FinancialDataI} />
          </Box>
        </Grid>

        <Grid templateColumns="1fr 1fr" mt="3rem" bg="transparent">
          <Box>
            <Image src={DirectDebit} width="8rem" height="8rem" mb="5rem" />
            <Text  pb="1.5rem" color="#050929" fontSize="3xl">Direct Debit</Text>
            <Text pt="3rem">Seamlessly initiate recurring direct debit</Text>
            <Button color="white"  mt="3rem" backgroundColor="#182cd1">
              <HStack>
                <Text>Start with Direct Debit</Text>
                <BsArrowRight />
              </HStack>
            </Button>
            <Box mt="3rem">
              <HStack spacing={6} mr="2rem" mb="1.5rem">
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Instant Settlement</Text>
                </HStack>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Low fraud risk</Text>
                </HStack>
              </HStack>
              <HStack spacing={6}>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Fast Integration</Text>
                </HStack>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Bank-grade Security</Text>
                </HStack>
              </HStack>
            </Box>
          </Box>
          <Box mt="7rem">
            <Image src={DirectDebitI} />
          </Box>
        </Grid>

        <Grid templateColumns="1fr 1fr" mt="3rem">
          <Box>
            <Image src={StatementPages} width="8rem" height="8rem" mb="5rem" />
            <Text  pb="1.5rem" color="#050929" fontSize="3xl">Statement Pages</Text>
            <Text pt="3rem">Seamlessly initiate recurring direct debit</Text>
            <Button color="white"  mt="3rem" backgroundColor="#182cd1">
              <HStack>
                <Text>Start with Statement Pages</Text>
                <BsArrowRight />
              </HStack>
            </Button>
            <Box mt="3rem">
              <HStack spacing={6} mr="2rem" mb="1.5rem">
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Instant Collection</Text>
                </HStack>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Zero coding</Text>
                </HStack>
              </HStack>
              <HStack spacing={6}>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Branded Pages</Text>
                </HStack>
                <HStack spacing={3}>
                  <Image src={Check} />
                  <Text>Secure & Reliable</Text>
                </HStack>
              </HStack>
            </Box>
          </Box>
          <Box mt="7rem">
            <Image src={StatementPagesI} />
          </Box>
        </Grid>
      </Box>

        <Grid templateColumns="1fr 1fr" backgroundColor="#0e175d" backgroundImage={Developers} mt="2rem">
          <Box pl="6.3rem" p="7rem" minHeight="450px">
            <Button color="orange" mb="3rem">
              <Text>Built with 💙 for developers</Text>
            </Button>
            <Text color="white"  mb="3rem" fontSize="5xl">Powerful, easy-to-use</Text>
            <Text color="white"  mb="3rem">We agonize over the right abstractions so your teams don't need to stich together disperate systems or spend months to integrate. We have made integration easy for you with simple API call and clear documentation guides to ensure that you can get up and running in on time.</Text>
            <Button color="white" p="1.5rem" backgroundColor="#0e174a">
              <HStack spacing={3}>
                <Text>Explore docs</Text>
                <BsArrowRight />
              </HStack>
            </Button>
          </Box>
          <Box pr="6.3rem"  minHeight="600px">
            <Tabs backgroundColor="navy" color="white" isFitted p="1.5rem">
              <TabList>
                <Tab>Authenticate</Tab>
                <Tab>Get Account</Tab>
                <Tab>Get Transaction</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Flex direction="column">
                    <Box backgroundColor="navy" p="1.5rem">
                      <Text fontSize="3xl">
                        Exchange Token
                      </Text>
                      <Link color="green">Endpoint - https://api.withmono.com/account/auth</Link>
                      <Link color="green">
                        <HStack spacing={3}>
                          <Text>Method</Text>
                          <Button borderRadius="full" color="white" backgroundColor="orange">POST</Button>
                        </HStack>
                      </Link>
                    </Box>


                    <Box p="1.5rem">
                      <Text>{'{'}</Text>
                      <HStack>
                        <Text color="#457667" pl="1.8rem">code: </Text>
                        <Text color="#659867">"has7tgas7t73"</Text>
                        <Text color="#989898">//code returned from mono connect</Text>
                      </HStack>
                      <Text>{'}'}</Text>
                    </Box>


                    <Box p="1.5rem">
                      <Flex direction="row">
                        <Button color="#182cd1">
                          <HStack spacing={3}>
                            <Text>Click here to run </Text>
                            <BsFillPlayFill />
                          </HStack>
                        </Button>

                        <Spacer />
  
                        <Text borderRadius="full" color="orange">JSon</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Grid>

          <Grid templateColumns="1fr 1fr"  pl="6.3rem" pr="6.3rem">
            <Box>
              <Text fontSize="6xl">Getting started takes less than 10 minutes</Text>
            </Box>
            
            <Flex direction="row">
              <Spacer />
              <Box p="1.5rem">
                <HStack spacing={2}>
                  <Button color="white" backgroundColor="blue">
                    <HStack spacing={2}>
                      <Text>Start now</Text>
                      <BsArrowRight />
                    </HStack>
                  </Button>
                  <Button color="blue" backgroundColor="whitesmoke">
                    <HStack spacing={2}>
                      <Text>Talk to sales team</Text>
                      <BiHeadphone />
                    </HStack>
                  </Button>
                </HStack>
              </Box>
            </Flex>
          </Grid>

        <Box backgroundImage={Footer}>
        <Box pl="6.3rem" pr="6.3rem" pt="1.5rem">
          <Grid templateColumns="1fr 1fr 1fr 1fr" gap={8}>
            <Box>
              <Image src={Blue2} />
            </Box>

              <Box>
                <Grid templateColumns="1fr" gap={4}>
                  <Grid templateColumns="1fr" gap={2}>                  <Text fontWeight="bold">Products</Text>
                    <Text>Mono Connect</Text>
                    <Text>Direct Debit</Text>
                    <Text>Statement Pages</Text>
                  </Grid>

                  <Grid direction="1fr" gap={2}>  
                    <Text fontWeight="bold">Help & Resources</Text>
                    <Text>Documentation</Text>
                    <Text>API Refrence</Text>
                    <Text>Help Desk</Text>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid templateColumns="1fr" gap={4}>
                  <Grid templateColumns="1fr" gap={2}>  
                    <Text fontWeight="bold">Use Cases</Text>
                    <Text>Personal finances</Text>
                    <Text>Account verification</Text>
                    <Text>Lending</Text>
                    <Text>Accounting</Text>
                  </Grid>

                  <Grid templateColumns="1fr" gap={2}>  
                    <Text fontWeight="bold">Legal</Text>
                    <Text>Privacy - End Users</Text>
                    <Text>Developer Policy</Text>
                    <Text>Terms</Text>
                    <Text>Cookies</Text>
                    <Text>Security</Text>
                  </Grid>
                </Grid>
              </Box>
              

              <Box>
                <Grid templateColumns="1fr" gap={4}>  
                  <Grid templateColumns="1fr" gap={2}>  
                    <Text fontWeight="bold">Company</Text>
                    <Text>About</Text>
                    <Text>Contact</Text>
                    <Text>Blog</Text>
                    <Text>We are hiring 🎉</Text>
                  </Grid>

                  <Grid templateColumns="1fr" gap={2}>  
                    <Text fontWeight="bold">Coverage</Text>
                    <Text><sub>NG</sub> Nigeria</Text>
                    <Text><sub>GH</sub> Ghana - Soon</Text>
                    <Text><sub>KE</sub> Kenya - Soon</Text>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
        </Box>

        <Flex direction="row" pr="6.3rem" pl="6.3rem">
          <Box>
            <Text>© Mono Technologies Nigeria Limited</Text>
          </Box>
          <Spacer />
          <HStack>
            <HStack spacing={1}>
              <Image src={Twitter} />
              <Text>Twitter</Text>
            </HStack>
            
            <HStack spacing={1}>
              <Image src={LinkedIn} />
              <Text>LinkedIn</Text>
            </HStack>
          </HStack>
        </Flex>
        </Box>
    </Box>
  );
}

export default App;
