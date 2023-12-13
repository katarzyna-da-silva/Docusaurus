import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Concept DevOps',
    Svg: require('@site/static/img/undraw_internet_on_the_go_re_vben.svg').default,
    description: (
      
      <>
DevOps est une philosophie et un ensemble de pratiques liées à la combinaison des activités de développement et d'exploitation 
afin d'augmenter l'efficacité des processus de livraison de logiciels. 
Il s'efforce de minimiser la division entre les équipes, 
permettant la livraison continue de logiciels de haute qualité.
      </>
    ),
  },
  {
    title: 'Définition du DevOps :',
    Svg: require('@site/static/img/undraw_product_iteration_kjok.svg').default,
    description: (
      <>
DevOps repose sur la synchronisation étroite entre le développement logiciel (coding, testing) 
et l'exploitation (deployment, monitoring). L'objectif est d'automatiser et d'optimiser l'ensemble du cycle de vie du développement, 
de la conception à la production, afin d'accélérer les déploiements et d'améliorer la qualité des logiciels.
      </>
    ),
  },
  {
    title: 'Outils et Pratiques DevOps :',
    Svg: require('@site/static/img/undraw_software_engineer_re_tnjc.svg').default,
    description: (
      <>
        Des outils tels que Jenkins, Ansible, et Terraform sont utilisés pour automatiser divers processus. 
        La conteneurisation avec Docker et l'orchestration avec Kubernetes sont également des pratiques courantes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
