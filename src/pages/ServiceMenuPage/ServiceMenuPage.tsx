import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import { languageConfig } from '../../langugeConfig';
import type { RootState } from '../../store/store';
import { CommonSettingsComponent } from '../../components/CommonSettingsComponent/CommonSettingsComponent';
import { TerminalSettingsComponent } from '../../components/TerminalSettingsComponent/TerminalSettingsComponent';
import { SwiperSettingsComponent } from '../../components/SwiperSettingsComponent/SwiperSettingsComponent';
import { AboutDeviceComponent } from '../../components/AboutDeviceComponent/AboutDeviceComponent';
import ServicePageWrapper from '../ServicePageWrapper/ServicePageWrapper';

export const ServiceMenuPage = () => {
  const { language } = useSelector((state: RootState) => state.configurationReducer)
  return (
    <ServicePageWrapper>
      <div className="settings-page-background">
        <div className="settings-page-wrapper">
          <Tabs>
            <TabList>
              <Tab>{languageConfig[language].SETTINGS_PAGE.MACHINE_CONFIGURATION}</Tab>
              <Tab>{languageConfig[language].SETTINGS_PAGE.TERMINAL_SETTINGS}</Tab>
              <Tab>{languageConfig[language].SETTINGS_PAGE.SWIPER_SETTINGS}</Tab>
              <Tab>{languageConfig[language].SETTINGS_PAGE.PRODUCTS_SETTINGS}</Tab>
            </TabList>

            <TabPanel>
              <CommonSettingsComponent />
            </TabPanel>
            <TabPanel>
              <TerminalSettingsComponent />
            </TabPanel>
            <TabPanel>
              <SwiperSettingsComponent />
            </TabPanel>
            <TabPanel>
              <AboutDeviceComponent />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </ServicePageWrapper>

  )
}