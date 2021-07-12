import './App.css';
import {Button, Box, Link, Spacer, Text, HStack, Flex, Grid, Tabs, TabList, TabPanels, TabPanel, Image} from '@chakra-ui/react';
import Nigeria from './assets/nigeria.svg';
import Blue from './assets/blue.svg';
import {BsArrowRight} from 'react-icons/bs';
import {BiHeadphone} from 'react-icons/bi';
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

function App() {
  return (
    <Box>
      <Grid templateColumns="3fr" gap={6} pr="6.3rem" pl="6.3rem" pt="0.2em" overflow="hidden" className="header">
        <HStack>
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
            <Button color="white" colorScheme="blue">
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
              <Button color="#ffaf2c"  backgroundColor="rgba(255,175,44,.1)">
                Elevating financial innovation
              </Button>
              <Text color="black" fontSize="4xl">
                Plug-and-play technology through one API
              </Text>
            </Box>
          
            <Box>
              <Text fontSize="1.8rem" lineHeight="2.8rem">Access a broad range of high-quality financial ddata from institutions across Africa through a single API. With Mono, you can provide new customer experiences.</Text>
              <Button color="white"  backgroundColor="#182cd1">
                <HStack>
                  <Text>See a demo</Text>
                  <BsArrowRight />
                </HStack>
              </Button>
            </Box>
        </Grid>

        <Grid templateColumns="1fr 1fr" mt="2rem">
          <Box>
            <Image src={FinancialData} width="8rem" height="8rem" mb="5rem" />
            <Text  pb="1.5rem" color="#050929">Connect</Text>
            <Text pt="3rem">Mono connect allows access to financial data from your user's financial account. With Connect, you can get your customers transactions, real time balances, income etc.</Text>
            <Button color="white"  mt="3rem" backgroundColor="#182cd1">
              <HStack>
                <Text>Start with Financial Data</Text>
                <BsArrowRight />
              </HStack>
            </Button>
            <Box mt="6.3rem">
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

        <Grid templateColumns="1fr 1fr" mt="2rem">
          <Box>
            <Image src={DirectDebit} width="8rem" height="8rem" mb="5rem" />
            <Text  pb="1.5rem" color="#050929">Direct Debit</Text>
            <Text pt="3rem">Seamlessly initiate recurring direct debit</Text>
            <Button color="white"  mt="3rem" backgroundColor="#182cd1">
              <HStack>
                <Text>Start with Direct Debit</Text>
                <BsArrowRight />
              </HStack>
            </Button>
            <Box mt="6.3rem">
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

        <Grid templateColumns="1fr 1fr" mt="2rem">
          <Box>
            <Image src={StatementPages} width="8rem" height="8rem" mb="5rem" />
            <Text  pb="1.5rem" color="#050929" fontSize="3xl">Direct Debit</Text>
            <Text pt="3rem">Seamlessly initiate recurring direct debit</Text>
            <Button color="white"  mt="3rem" backgroundColor="#182cd1">
              <HStack>
                <Text>Start with Statement Pages</Text>
                <BsArrowRight />
              </HStack>
            </Button>
            <Box mt="6.3rem">
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
    </Box>
  );
}

export default App;
