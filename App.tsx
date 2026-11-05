import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Tab = 'Kryefaqja' | 'Vrapimet' | 'Klubi' | 'Profili';

const COLORS = {
  background: '#0B1220',
  surface: '#121D2E',
  surfaceRaised: '#18263A',
  line: '#26364B',
  text: '#F4F7FB',
  muted: '#9BAABD',
  lime: '#C6F36A',
  blue: '#82B7FF',
};

function Tag({ children }: { children: string }) {
  return <View style={styles.tag}><Text style={styles.tagText}>{children}</Text></View>;
}

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

function HomeScreen({ onTab, going, onToggleGoing }: { onTab: (tab: Tab) => void; going: boolean; onToggleGoing: () => void }) {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topline}>
        <View style={styles.brandMark}><Text style={styles.brandMarkText}>G</Text></View>
        <View style={styles.brandCopy}>
          <Text style={styles.brandName}>GJAKOVA</Text>
          <Text style={styles.brandSub}>RUN CLUB</Text>
        </View>
        <TouchableOpacity accessibilityLabel="Njoftimet" style={styles.bell} onPress={() => Alert.alert('Njoftimet', 'Njoftimet e klubit do të shfaqen këtu.')}>
          <Text style={styles.bellText}>♧</Text>
          <View style={styles.bellDot} />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeRow}>
        <View>
          <Text style={styles.eyebrow}>E MËRKURË · GJAKOVË</Text>
          <Text style={styles.greeting}>Vrapojmë{ '\n' }së bashku.</Text>
        </View>
        <View style={styles.shoeCircle}><Text style={styles.shoeEmoji}>🏃</Text></View>
      </View>
      <Text style={styles.intro}>Çdo hap ka më shumë kuptim kur e ndajmë me njëri-tjetrin.</Text>

      <View style={styles.statsCard}>
        <View style={styles.statBlock}><Text style={styles.statValue}>5.2</Text><Text style={styles.statLabel}>KM SOT</Text></View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}><Text style={styles.statValue}>248</Text><Text style={styles.statLabel}>Vrapues</Text></View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}><Text style={styles.statValue}>12</Text><Text style={styles.statLabel}>Evente</Text></View>
      </View>

      <SectionTitle title="Vrapimi i radhës" action="KALENDARI  →" />
      <View style={styles.eventCard}>
        <View style={styles.eventTop}>
          <Tag>Vrapim i përbashkët</Tag>
          <Text style={styles.eventDate}>E SHTUNË · 08:00</Text>
        </View>
        <Text style={styles.eventTitle}>Rrugëve të Gjakovës</Text>
        <Text style={styles.eventDescription}>Ritëm i lehtë, shoqëri e mirë. Të gjithë janë të mirëseardhur.</Text>
        <View style={styles.eventMetaRow}>
          <Text style={styles.eventMeta}>⌖  Çarshia e Vjetër</Text>
          <Text style={styles.eventMeta}>◷  5 km</Text>
        </View>
        <TouchableOpacity style={[styles.primaryButton, going && styles.buttonGoing]} onPress={onToggleGoing}>
          <Text style={styles.primaryButtonText}>{going ? '✓  Je në listë' : 'Bashkohu me ne  →'}</Text>
        </TouchableOpacity>
        <Text style={styles.attendeeText}>● ● ●  +18 të tjerë marrin pjesë</Text>
      </View>

      <SectionTitle title="Në klub" action="SHIKO TË GJITHA  →" />
      <View style={styles.clubCard}>
        <View style={styles.clubIcon}><Text style={styles.clubIconText}>✦</Text></View>
        <View style={styles.clubCopy}>
          <Text style={styles.clubTitle}>Vrapimi është për të gjithë</Text>
          <Text style={styles.clubDescription}>Gjej ritmin tënd. Ne të presim.</Text>
        </View>
        <TouchableOpacity onPress={() => onTab('Klubi')}><Text style={styles.chevron}>›</Text></TouchableOpacity>
      </View>
      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

function RunsScreen({ going, onToggleGoing }: { going: boolean; onToggleGoing: () => void }) {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.eyebrow}>PLANIFIKO JAVËN</Text>
      <Text style={styles.pageTitle}>Vrapimet</Text>
      <Text style={styles.pageIntro}>Takime të hapura për çdo nivel dhe çdo ritëm.</Text>
      <View style={styles.weekStrip}>
        {['HËN', 'MAR', 'MËR', 'ENJ', 'PRE', 'SHT', 'DIE'].map((day, i) => <View key={day} style={[styles.dayCell, i === 5 && styles.daySelected]}><Text style={[styles.dayText, i === 5 && styles.dayTextSelected]}>{day}</Text><Text style={[styles.dayNumber, i === 5 && styles.dayTextSelected]}>{['02','03','04','05','06','07','08'][i]}</Text></View>)}
      </View>
      <SectionTitle title="Këtë javë" />
      <View style={styles.runListCard}>
        <View style={styles.runDateBox}><Text style={styles.runMonth}>QER</Text><Text style={styles.runDay}>07</Text></View>
        <View style={styles.runInfo}><Text style={styles.runTime}>08:00 · 5 KM</Text><Text style={styles.runName}>Rrugëve të Gjakovës</Text><Text style={styles.runPlace}>⌖  Çarshia e Vjetër</Text></View>
      </View>
      <TouchableOpacity style={[styles.primaryButton, going && styles.buttonGoing]} onPress={onToggleGoing}><Text style={styles.primaryButtonText}>{going ? '✓  Je në listën e pjesëmarrësve' : 'Regjistrohu për vrapim  →'}</Text></TouchableOpacity>
      <View style={[styles.runListCard, styles.secondRun]}>
        <View style={styles.runDateBox}><Text style={styles.runMonth}>QER</Text><Text style={styles.runDay}>11</Text></View>
        <View style={styles.runInfo}><Text style={styles.runTime}>18:30 · 3 KM</Text><Text style={styles.runName}>Vrapim pas pune</Text><Text style={styles.runPlace}>⌖  Parku i Qytetit</Text></View>
      </View>
      <View style={styles.noteCard}><Text style={styles.noteTitle}>Këshillë e klubit</Text><Text style={styles.noteText}>Eja 10 minuta më herët për t'u ngrohur dhe përshëndetur me ekipin.</Text></View>
    </ScrollView>
  );
}

function ClubScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.eyebrow}>NJË EKIP. NJË QYTET.</Text>
      <Text style={styles.pageTitle}>Klubi ynë</Text>
      <Text style={styles.pageIntro}>Gjakova Run Club bashkon njerëz që besojnë se lëvizja dhe shoqëria e mirë e bëjnë qytetin më të bukur.</Text>
      <View style={styles.manifestoCard}><Text style={styles.manifestoQuote}>“</Text><Text style={styles.manifestoText}>Nuk ka rëndësi sa shpejt vrapon. Rëndësi ka që nisesh.</Text><Text style={styles.manifestoCaption}>— FILOZOFIA GRC</Text></View>
      <SectionTitle title="Çfarë na bashkon" />
      {[['01', 'Gjithëpërfshirja', 'Vrapues të çdo niveli, moshe dhe ritmi.'], ['02', 'Komuniteti', 'Mbështesim njëri-tjetrin, në çdo hap.'], ['03', 'Gjakova', 'Zbulojmë dhe vlerësojmë qytetin tonë.']].map(([n, title, description]) => <View key={n} style={styles.valueRow}><Text style={styles.valueNumber}>{n}</Text><View style={styles.valueCopy}><Text style={styles.valueTitle}>{title}</Text><Text style={styles.valueDescription}>{description}</Text></View></View>)}
      <TouchableOpacity style={styles.outlineButton} onPress={() => Alert.alert('Mirë se vjen!', 'Na shkruaj në Instagram @gjakovarunclub për t’u bashkuar me komunitetin.')}><Text style={styles.outlineButtonText}>Bëhu pjesë e klubit  →</Text></TouchableOpacity>
    </ScrollView>
  );
}

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.eyebrow}>HAPËSIRA JOTE</Text>
      <Text style={styles.pageTitle}>Profili</Text>
      <View style={styles.profileCard}><View style={styles.avatar}><Text style={styles.avatarText}>🏃</Text></View><Text style={styles.profileName}>Vrapues i GRC</Text><Text style={styles.profileSub}>Anëtar i komunitetit</Text><View style={styles.profileStats}><View><Text style={styles.profileStatValue}>0</Text><Text style={styles.profileStatLabel}>Vrapime</Text></View><View><Text style={styles.profileStatValue}>0 km</Text><Text style={styles.profileStatLabel}>Distanca</Text></View><View><Text style={styles.profileStatValue}>—</Text><Text style={styles.profileStatLabel}>Anëtar që</Text></View></View></View>
      <View style={styles.noteCard}><Text style={styles.noteTitle}>Profili personal</Text><Text style={styles.noteText}>Ky version fillestar nuk kërkon llogari. Regjistrimi dhe sinkronizimi i statistikave mund të shtohen kur të jetë gati sistemi i anëtarësimit.</Text></View>
      <TouchableOpacity style={styles.outlineButton} onPress={() => Alert.alert('Gjakova Run Club', 'Na ndiq në rrjetet sociale për lajmet dhe vrapimet e ardhshme.')}><Text style={styles.outlineButtonText}>Lidhu me klubin  →</Text></TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  const [tab, setTab] = useState<Tab>('Kryefaqja');
  const [going, setGoing] = useState(false);
  const toggleGoing = () => setGoing((current) => !current);
  const tabs: { label: Tab; icon: string }[] = [
    { label: 'Kryefaqja', icon: '⌂' },
    { label: 'Vrapimet', icon: '↗' },
    { label: 'Klubi', icon: '✳' },
    { label: 'Profili', icon: '○' },
  ];

  return (
    <View style={styles.app}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      {tab === 'Kryefaqja' ? <HomeScreen onTab={setTab} going={going} onToggleGoing={toggleGoing} /> : null}
      {tab === 'Vrapimet' ? <RunsScreen going={going} onToggleGoing={toggleGoing} /> : null}
      {tab === 'Klubi' ? <ClubScreen /> : null}
      {tab === 'Profili' ? <ProfileScreen /> : null}
      <View style={styles.tabBar}>
        {tabs.map((item) => {
          const active = tab === item.label;
          return <TouchableOpacity key={item.label} style={styles.tabItem} onPress={() => setTab(item.label)} accessibilityRole="button" accessibilityState={{ selected: active }}><Text style={[styles.tabIcon, active && styles.tabActive]}>{item.icon}</Text><Text style={[styles.tabLabel, active && styles.tabActive]}>{item.label}</Text></TouchableOpacity>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: COLORS.background, paddingTop: 12 },
  content: { paddingHorizontal: 22, paddingTop: 14, paddingBottom: 28 },
  topline: { flexDirection: 'row', alignItems: 'center', marginBottom: 34 },
  brandMark: { width: 42, height: 42, borderRadius: 14, backgroundColor: COLORS.lime, alignItems: 'center', justifyContent: 'center' },
  brandMarkText: { color: COLORS.background, fontSize: 24, fontWeight: '900' },
  brandCopy: { marginLeft: 10, flex: 1 }, brandName: { color: COLORS.text, fontSize: 12, fontWeight: '900', letterSpacing: 2.2 }, brandSub: { color: COLORS.muted, fontSize: 9, fontWeight: '700', letterSpacing: 3, marginTop: 2 },
  bell: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.surface, alignItems: 'center', justifyContent: 'center' }, bellText: { color: COLORS.text, fontSize: 21 }, bellDot: { position: 'absolute', right: 9, top: 8, width: 7, height: 7, borderRadius: 4, backgroundColor: COLORS.lime },
  welcomeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, eyebrow: { color: COLORS.lime, fontSize: 10, fontWeight: '800', letterSpacing: 1.8, marginBottom: 11 }, greeting: { color: COLORS.text, fontSize: 37, lineHeight: 40, fontWeight: '800', letterSpacing: -1 }, shoeCircle: { width: 82, height: 82, borderRadius: 41, backgroundColor: COLORS.surfaceRaised, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.line }, shoeEmoji: { fontSize: 37 }, intro: { color: COLORS.muted, fontSize: 14, lineHeight: 21, marginTop: 15, maxWidth: 300 },
  statsCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: COLORS.surface, borderRadius: 18, borderWidth: 1, borderColor: COLORS.line, paddingVertical: 17, marginTop: 24, marginBottom: 29 }, statBlock: { alignItems: 'center', flex: 1 }, statValue: { color: COLORS.text, fontSize: 20, fontWeight: '800' }, statLabel: { color: COLORS.muted, fontSize: 9, fontWeight: '700', letterSpacing: 1, marginTop: 5 }, statDivider: { height: 31, width: 1, backgroundColor: COLORS.line },
  sectionHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 13, marginTop: 2 }, sectionTitle: { color: COLORS.text, fontSize: 17, fontWeight: '800' }, sectionAction: { color: COLORS.lime, fontSize: 9, fontWeight: '800', letterSpacing: .6 },
  eventCard: { backgroundColor: COLORS.surface, borderRadius: 20, borderWidth: 1, borderColor: COLORS.line, padding: 18, marginBottom: 27 }, eventTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, tag: { backgroundColor: '#263820', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 }, tagText: { color: COLORS.lime, fontSize: 9, fontWeight: '800' }, eventDate: { color: COLORS.muted, fontSize: 9, fontWeight: '800', letterSpacing: .6 }, eventTitle: { color: COLORS.text, fontSize: 21, fontWeight: '800', marginTop: 17 }, eventDescription: { color: COLORS.muted, fontSize: 12, lineHeight: 18, marginTop: 7 }, eventMetaRow: { flexDirection: 'row', marginTop: 15, marginBottom: 16, gap: 18 }, eventMeta: { color: '#C4D0DF', fontSize: 11, fontWeight: '600' }, primaryButton: { backgroundColor: COLORS.lime, borderRadius: 12, minHeight: 48, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 }, buttonGoing: { backgroundColor: '#314325' }, primaryButtonText: { color: COLORS.background, fontSize: 13, fontWeight: '900' }, attendeeText: { color: COLORS.muted, fontSize: 10, textAlign: 'center', marginTop: 13 },
  clubCard: { backgroundColor: COLORS.surfaceRaised, borderRadius: 16, padding: 15, flexDirection: 'row', alignItems: 'center', marginTop: 2 }, clubIcon: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#273822', alignItems: 'center', justifyContent: 'center' }, clubIconText: { color: COLORS.lime, fontSize: 23 }, clubCopy: { flex: 1, marginLeft: 12 }, clubTitle: { color: COLORS.text, fontSize: 12, fontWeight: '800' }, clubDescription: { color: COLORS.muted, fontSize: 10, marginTop: 5 }, chevron: { color: COLORS.lime, fontSize: 28, paddingHorizontal: 4 }, bottomSpace: { height: 22 },
  tabBar: { flexDirection: 'row', backgroundColor: '#101A29', borderTopWidth: 1, borderTopColor: COLORS.line, paddingTop: 9, paddingBottom: 15 }, tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 3 }, tabIcon: { color: COLORS.muted, fontSize: 21, height: 24 }, tabLabel: { color: COLORS.muted, fontSize: 9, fontWeight: '700' }, tabActive: { color: COLORS.lime },
  pageTitle: { color: COLORS.text, fontSize: 34, fontWeight: '800', letterSpacing: -.8, marginBottom: 8 }, pageIntro: { color: COLORS.muted, fontSize: 14, lineHeight: 21, marginBottom: 25 }, weekStrip: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: COLORS.surface, borderRadius: 16, padding: 11, marginBottom: 29 }, dayCell: { alignItems: 'center', paddingVertical: 7, paddingHorizontal: 5, borderRadius: 11 }, daySelected: { backgroundColor: COLORS.lime }, dayText: { color: COLORS.muted, fontSize: 8, fontWeight: '800' }, dayNumber: { color: COLORS.text, fontSize: 12, fontWeight: '800', marginTop: 7 }, dayTextSelected: { color: COLORS.background }, runListCard: { backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.line, borderRadius: 16, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 13 }, runDateBox: { width: 51, height: 57, borderRadius: 12, backgroundColor: COLORS.surfaceRaised, alignItems: 'center', justifyContent: 'center' }, runMonth: { color: COLORS.lime, fontSize: 9, fontWeight: '900' }, runDay: { color: COLORS.text, fontSize: 20, fontWeight: '800', marginTop: 1 }, runInfo: { marginLeft: 13, flex: 1 }, runTime: { color: COLORS.blue, fontSize: 9, fontWeight: '800', letterSpacing: .7 }, runName: { color: COLORS.text, fontSize: 14, fontWeight: '800', marginTop: 5 }, runPlace: { color: COLORS.muted, fontSize: 10, marginTop: 5 }, secondRun: { marginTop: 18 }, noteCard: { backgroundColor: '#162235', borderRadius: 16, borderLeftWidth: 3, borderLeftColor: COLORS.lime, padding: 16, marginTop: 18 }, noteTitle: { color: COLORS.text, fontSize: 13, fontWeight: '800', marginBottom: 6 }, noteText: { color: COLORS.muted, fontSize: 12, lineHeight: 18 },
  manifestoCard: { backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.line, borderRadius: 20, padding: 20, marginBottom: 28 }, manifestoQuote: { color: COLORS.lime, fontSize: 45, lineHeight: 48, fontWeight: '900' }, manifestoText: { color: COLORS.text, fontSize: 22, lineHeight: 29, fontWeight: '700', marginTop: 2 }, manifestoCaption: { color: COLORS.lime, fontSize: 9, fontWeight: '800', letterSpacing: 1.4, marginTop: 18 }, valueRow: { flexDirection: 'row', alignItems: 'flex-start', borderBottomWidth: 1, borderBottomColor: COLORS.line, paddingVertical: 15 }, valueNumber: { color: COLORS.lime, fontSize: 11, fontWeight: '900', marginRight: 15, marginTop: 2 }, valueCopy: { flex: 1 }, valueTitle: { color: COLORS.text, fontSize: 14, fontWeight: '800' }, valueDescription: { color: COLORS.muted, fontSize: 11, marginTop: 5, lineHeight: 16 }, outlineButton: { borderWidth: 1, borderColor: COLORS.lime, borderRadius: 12, minHeight: 48, alignItems: 'center', justifyContent: 'center', marginTop: 23 }, outlineButtonText: { color: COLORS.lime, fontSize: 13, fontWeight: '800' },
  profileCard: { alignItems: 'center', backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.line, borderRadius: 20, padding: 22, marginTop: 4 }, avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: COLORS.surfaceRaised, alignItems: 'center', justifyContent: 'center' }, avatarText: { fontSize: 33 }, profileName: { color: COLORS.text, fontSize: 18, fontWeight: '800', marginTop: 13 }, profileSub: { color: COLORS.muted, fontSize: 11, marginTop: 5 }, profileStats: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderTopWidth: 1, borderTopColor: COLORS.line, marginTop: 20, paddingTop: 17 }, profileStatValue: { color: COLORS.text, fontSize: 14, fontWeight: '800', textAlign: 'center' }, profileStatLabel: { color: COLORS.muted, fontSize: 9, marginTop: 5, textAlign: 'center' },
});
