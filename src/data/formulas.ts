interface Formula {
  id: string;
  problem: string;
  formula: string;
  imageUrl: string;
}

export const formulas: Formula[] = [
  {
    id: '1',
    problem: '2次方程式の解の公式は？',
    formula: 'x = -b ± √(b² - 4ac) / 2a',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    problem: '三角形の面積の公式は？',
    formula: 'S = (1/2)ah',
    imageUrl: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    problem: '三平方の定理は？',
    formula: 'a² + b² = c²',
    imageUrl: 'https://images.unsplash.com/photo-1648737963030-73f24b16b441?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    problem: '円の面積の公式は？',
    formula: 'S = πr²',
    imageUrl: 'https://images.unsplash.com/photo-1649943075763-ad7c35870c3f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    problem: '相似比と面積比の関係は？',
    formula: 'S₁:S₂ = k²',
    imageUrl: 'https://images.unsplash.com/photo-1648737963503-1a26da876aca?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    problem: '等差数列の和の公式は？',
    formula: 'Sn = n(a₁ + aₙ)/2',
    imageUrl: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '7',
    problem: '等比数列の和の公式は？',
    formula: 'Sn = a(1-rⁿ)/(1-r)',
    imageUrl: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '8',
    problem: '三角関数の相互関係は？',
    formula: 'sin²θ + cos²θ = 1',
    imageUrl: 'https://images.unsplash.com/photo-1648737962984-329ed8aba72d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '9',
    problem: '対数の性質は？',
    formula: 'log_a(MN) = log_aM + log_aN',
    imageUrl: 'https://images.unsplash.com/photo-1648737963030-73f24b16b441?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '10',
    problem: '微分の公式は？',
    formula: '(x^n)′ = nx^(n-1)',
    imageUrl: 'https://images.unsplash.com/photo-1648737962847-1a2403bcb19e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '11',
    problem: '正弦定理の公式は？',
    formula: 'a/sinA=b/sinB=c/sinC=2R	',
    imageUrl: ''
  },
  {
    id: '12',
    problem: '余弦定理の公式は？',
    formula: 'c^2=a^2+b^2-2abcosC	',
    imageUrl: ''
  },
  {
    id: '13',
    problem: '三角形の面積は？',
    formula: 'S=bcsinA/2',
    imageUrl: ''
  },
  {
    id: '14',
    problem: '三角形の面積(ヘロンの公式)は？',
    formula: 'S=√s(s-a)(s-b)(s-c)',
    imageUrl: ''
  },
  {
    id: '15',
    problem: '三角形の内接円と面積の公式は？',
    formula: 'S=r(a+b+c)/2',
    imageUrl: ''
  },
  {
    id: '16',
    problem: '順列は？',
    formula: 'nPr=n!/(n-r)!',
    imageUrl: ''
  },
  {
    id: '17',
    problem: '円順列は？',
    formula: '(n-1)!',
    imageUrl: ''
  },
  {
    id: '18',
    problem: 'じゅず順列は？',
    formula: '(n-1)!/2',
    imageUrl: ''
  }
  ,{
    id: '19',
    problem: '重複順列は？',
    formula: 'n^r',
    imageUrl: ''
  },
  {
    id: '20',
    problem: '組み合わせは？',
    formula: 'nCr=nPr/r!',
    imageUrl: ''
  },
  {
    id: '21',
    problem: '重複組み合わせは？',
    formula: 'nHr=n+r−1Cr',
    imageUrl: ''
  },
  {
    id: '22',
    problem: '反復試行の確率は？',
    formula: 'nCr(P^r)(1−p)^(n-r)',
    imageUrl: ''
  },
  {
    id: '23',
    problem: '条件つき確率は？',
    formula: 'PA(B)=P(A∩B)/P(A)',
    imageUrl: ''
  },
  {
    id: '24',
    problem: '確率の乗法定理は？',
    formula: 'P(A∩B)=P(A)PA(B)',
    imageUrl: ''
  },
  {
    id: '25',
    problem: '2次方程式の解と係数の関係の公式は？',
    formula: 'α+β=-b/a , αβ=c/a',
    imageUrl: ''
  },  
  {
    id: '26',
    problem: '点と直線の距離の公式は？',
    formula: '|ax1+by1+c|/√a^2+b^2',
    imageUrl: ''
  },
  {
    id: '27',
    problem: '円の方程式は？',
    formula: '(x-a)^2+(y-b)^2=r^2',
    imageUrl: ''
  },
  {
    id: '28',
    problem: '加法定理は？',
    formula: 'sin(α±β)=sinαcosβ±cosαsinβ',
    imageUrl: ''
  },
  {
    id: '29',
    problem: '三角関数の合成は？',
    formula: 'asinθ+bcosθ=(√a^2+b^2)sin(θ+α)',
    imageUrl: ''
  },
  {
    id: '30',
    problem: '接線の方程式は？',
    formula: 'y-f(a)=f´(a)(x-a)',
    imageUrl: ''
  },
  {
    id: '31',
    problem: '法線の方程式は？',
    formula: 'y-f(a)=-1/(f´(a)) (x-a)',
    imageUrl: ''
  },
  {
    id: '32',
    problem: '',
    formula: '',
    imageUrl: ''
  },


];
