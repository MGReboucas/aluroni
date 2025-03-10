import Cardapio from '../../data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import NossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
     let PratosRecomendados = [...Cardapio];
     PratosRecomendados = PratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
     const navigate = useNavigate();

     function RedirecionarParaDetalhes(prato: Prato){
          navigate(`/prato/${prato.id}`, { state: { prato }, replace: true});
     }

     return (
          <section>
               <h3 className={stylesTema.titulo}>
                    Recomendações da cozinha
               </h3>
               <div className={styles.recomendados}>
                    {PratosRecomendados.map(item => (
                         <div
                              key={item.id}
                              className={styles.recomendado}
                         >
                              <div className={styles.recomendado__imagem}>
                                   <img src={item.photo} alt={item.title} />
                              </div>
                              <button 
                                   className={styles.recomendado__botao}
                                   onClick={() => RedirecionarParaDetalhes(item)}
                                   >
                                   Ver Mais
                              </button>
                         </div>
                    ))}
               </div>
               <h3 className={stylesTema.titulo}>Nossa Casa</h3>
               <div className={styles.nossaCasa}>
                    <img src={NossaCasa} alt='Casa do Aluroni'/>
                    <div className={styles.nossaCasa__endereco}>
                         Rua Vergueiro, 3185 <br /><br /> Vila Mariana - SP
                    </div>
               </div>
          </section>
     );
}